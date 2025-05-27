import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { GoogleAuthService } from './GoogleAuthService';

type ApiResponse = {
  resourceName: string;
  etag: string;
  names?: {
    displayName: string;
    givenName?: string;
    familyName?: string;
    metadata: { primary: boolean };
  }[];
  emailAddresses?: {
    value: string;
    metadata: { primary: boolean };
  }[];
  photos?: {
    url: string;
    metadata: { primary: boolean };
  }[];
};

type UserInfoData = {
  name: string;
  email: string;
  photo: string;
};

/**
 * docs: https://developers.google.com/people/api/rest/v1/people/get
 */
@Injectable({
  providedIn: 'root',
})
export class GoogleUserInfoService {
  private readonly apiUrl = 'https://people.googleapis.com/v1/people/me';
  private http = inject(HttpClient);
  private auth = inject(GoogleAuthService);

  data = signal<UserInfoData | undefined>(undefined);

  fetchUserInfo() {
    if (this.data()) {
      return;
    }

    const accessToken = this.auth.accessToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });

    const params = new HttpParams().set(
      'personFields',
      'emailAddresses,names,photos'
    );

    this.http
      .get<ApiResponse>(this.apiUrl, { headers, params })
      .pipe(
        map((response) => ({
          email:
            response.emailAddresses?.find((x) => x.metadata.primary)?.value ||
            '',
          name:
            response.names?.find((x) => x.metadata.primary)?.displayName || '',
          photo: response.photos?.find((x) => x.metadata.primary)?.url || '',
        })),
        catchError((error) => {
          console.error('Error fetching profile:', error);
          throw error;
        })
      )
      .subscribe({
        next: (data) => this.data.set(data),
        error: (error) => console.error('Error fetching user:', error),
      });
  }
}
