/// <reference types="google.accounts" />

import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

type AuthConfig = {
  clientId: string;
  scopes: string[];
};

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private router = inject(Router);

  private tokenClient: google.accounts.oauth2.TokenClient | null = null;
  private accessToken$ = signal<string | null>(null);
  public isAuthenticated = computed(() => !!this.accessToken());

  public loginError = signal<string | null>(null);

  public get accessToken() {
    // expose a read-only version of the signal
    return this.accessToken$.asReadonly();
  }

  constructor() {
    const storedToken = this.getTokenFromStorage();
    this.accessToken$.set(storedToken);
  }

  public async initialize({ clientId, scopes }: AuthConfig) {
    if (!('google' in window)) {
      await this.loadGsiScript();
    }

    const storedToken = this.getTokenFromStorage();

    if (storedToken) {
      // just use stored token if it's available
      this.accessToken$.set(storedToken);
      this.router.navigate(['/']);
      return;
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
          this.saveTokenToStorage(response.access_token, +response.expires_in);
          this.router.navigate(['/']);
        } else {
          this.loginError.set(
            'There was an error logging in. Please try again.'
          );
          console.error('Failed to obtain access token.');
        }
      },
    });
  }

  public async revokeConsent() {
    return new Promise<{ successful: boolean }>((resolve, reject) => {
      const accessToken = this.accessToken();

      if (!accessToken) {
        reject(new Error('Access token not found'));
        return;
      }

      google.accounts.oauth2.revoke(accessToken, () => {
        resolve({ successful: true });
      });
    });
  }

  /** access token */
  private isTokenExpired(tokenExpiry: string) {
    return Date.now() >= parseInt(tokenExpiry);
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

  private clearTokenFromStorage() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('tokenExpiry');
  }

  public requestAccessToken() {
    this.loginError.set(null);

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
  /** access token */
}
