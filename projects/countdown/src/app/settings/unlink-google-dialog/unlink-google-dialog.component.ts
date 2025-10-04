import { Component, inject, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  UiAlertComponent,
  UiButtonComponent,
  UiDialogComponent,
  Logger,
} from '@cocco3/angular-ui';
import { GoogleAuthService } from '../../services/GoogleAuthService';

@Component({
  imports: [UiButtonComponent, UiDialogComponent, UiAlertComponent],
  selector: 'app-unlink-google-dialog',
  templateUrl: './unlink-google-dialog.html',
})
export class UnlinkGoogleDialogComponent {
  private readonly logger = inject(Logger);
  private readonly auth = inject(GoogleAuthService);
  private readonly router = inject(Router);

  private readonly dialog = viewChild<UiDialogComponent>('dialog');

  protected error = '';
  protected isSaving = false;

  protected resetForm() {
    this.isSaving = false;
    this.error = '';
  }

  protected async revokeGoogleConsent() {
    try {
      this.isSaving = true;
      this.error = '';

      const result = await this.auth.revokeConsent();

      if (result.successful) {
        this.router.navigate(['/login']);
      }
    } catch (err) {
      this.isSaving = false;
      this.error =
        'There was a problem unlinking your Google account, please try again.';
      this.logger.error('Error unlinking Google', err as Error);
    }
  }

  public showDialog() {
    this.dialog()?.showModal();
  }
}
