import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { type Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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

  getUserInfo(accessToken: string): Observable<UserInfoData> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });

    const params = new HttpParams().set(
      'personFields',
      'emailAddresses,names,photos'
    );

    return this.http.get<ApiResponse>(this.apiUrl, { headers, params }).pipe(
      map((response) => ({
        email:
          response.emailAddresses?.find((x) => x.metadata.primary)?.value || '',
        name:
          response.names?.find((x) => x.metadata.primary)?.displayName || '',
        photo: response.photos?.find((x) => x.metadata.primary)?.url || '',
      })),
      catchError((error) => {
        console.error('Error fetching profile:', error);
        throw error;
      })
    );
  }
}
