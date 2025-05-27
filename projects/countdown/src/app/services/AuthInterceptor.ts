import { type HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GoogleAuthService } from './GoogleAuthService';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(GoogleAuthService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        auth.clearAccessToken();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};
