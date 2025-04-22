/// <reference types="google.accounts" />

import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './UserService';
import { GoogleUserInfoService } from './GoogleUserInfoService';

type AuthConfig = {
  clientId: string;
  scopes: string[];
};

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private user = inject(UserService);
  private userInfoService = inject(GoogleUserInfoService);
  private router = inject(Router);

  private tokenClient: google.accounts.oauth2.TokenClient | null = null;
  private accessToken$ = signal<string | null>(null);

  public get accessToken() {
    // expose a read-only version of the signal
    return this.accessToken$.asReadonly();
  }

  public isAuthenticated = computed(() => !!this.accessToken());

  public async initialize({ clientId, scopes }: AuthConfig) {
    const storedToken = this.getTokenFromStorage();

    if (storedToken) {
      // just use stored token if it's available
      this.accessToken$.set(storedToken);
      this.setLoggedInUser(storedToken);
      this.router.navigate(['/']);
      return;
    }

    if (!('google' in window)) {
      await this.loadGsiScript();
    }

    // Initialize the token client after the script is loaded
    this.initTokenClient(clientId, scopes);
  }

  private loadGsiScript() {
    return new Promise<void>((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://accounts.google.com/gsi/client';
      scriptElement.defer = true;
      scriptElement.async = true;
      scriptElement.onload = () => resolve();
      scriptElement.onerror = () =>
        reject(new Error('Failed to load GSI script.'));
      document.head.appendChild(scriptElement);
    });
  }

  private initTokenClient(clientId: string, scopes: string[]) {
    this.tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: scopes.join(' '),
      callback: (response) => {
        if (response.access_token) {
          this.accessToken$.set(response.access_token);
          this.setLoggedInUser(response.access_token);
          this.saveTokenToStorage(response.access_token, +response.expires_in);
          this.router.navigate(['/']);
        } else {
          console.error('Failed to obtain access token.');
        }
      },
    });
  }

  private saveTokenToStorage(accessToken: string, expiresIn: number) {
    const tokenExpiry = Date.now() + expiresIn * 1000;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('tokenExpiry', tokenExpiry.toString());
  }

  private getTokenFromStorage() {
    const accessToken = localStorage.getItem('accessToken');
    const tokenExpiry = localStorage.getItem('tokenExpiry');

    if (!accessToken || !tokenExpiry) {
      return null;
    }

    if (this.isTokenExpired(tokenExpiry)) {
      this.clearTokenFromStorage();
      return null;
    }

    return accessToken;
  }

  private isTokenExpired(tokenExpiry: string) {
    return Date.now() >= parseInt(tokenExpiry);
  }

  private clearTokenFromStorage() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('tokenExpiry');
  }

  public authorize() {
    if (!this.tokenClient) {
      console.error('Token client is not initialized.');
      return;
    }

    this.tokenClient.requestAccessToken();
  }

  public clearAccessToken() {
    this.accessToken$.set(null);
    this.clearTokenFromStorage();
  }

  private setLoggedInUser(token: string) {
    this.userInfoService.getUserInfo(token).subscribe({
      next: (data) => {
        this.user.setUser(data);
      },
      error: (error) => {
        console.error('Error fetching user:', error);
      },
    });
  }
}
