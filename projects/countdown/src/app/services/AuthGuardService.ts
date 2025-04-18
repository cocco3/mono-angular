import { inject, Injectable } from '@angular/core';
import { type CanActivate, Router } from '@angular/router';
import { GoogleAuthService } from './GoogleAuthService';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  private auth = inject(GoogleAuthService);
  private router = inject(Router);

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
