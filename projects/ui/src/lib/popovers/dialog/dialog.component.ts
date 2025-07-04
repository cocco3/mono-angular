import {
  Component,
  ElementRef,
  inject,
  input,
  output,
  Renderer2,
  type OnDestroy,
} from '@angular/core';
import { UiIconComponent } from '../../base/icon/icon.component';

@Component({
  imports: [UiIconComponent],
  selector: 'dialog[ui-dialog]',
  styleUrls: ['./dialog.css'],
  templateUrl: './dialog.html',
})
export class UiDialogComponent implements OnDestroy {
  public elementRef = inject(ElementRef<HTMLDialogElement>);
  private renderer = inject(Renderer2);

  heading = input<string>();
  description = input<string>();

  readonly afterClose = output();

  private get isOpen() {
    return this.elementRef.nativeElement.open;
  }

  private toggleBodyOverflow(hidden: boolean) {
    if (hidden) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  /**
   * Show the dialog as modal with a backdrop. The rest of the app
   * will not be accessible.
   */
  showModal() {
    if (this.isOpen) return;

    this.elementRef.nativeElement.showModal();
    this.toggleBodyOverflow(true);
  }

  /**
   * Show the dialog without a backdrop. The rest of the app
   * will be accessible.
   */
  show() {
    if (this.isOpen) return;

    this.elementRef.nativeElement.show();
  }

  /**
   * Close the dialog.
   */
  close() {
    this.elementRef.nativeElement.close();
    this.toggleBodyOverflow(false);
    this.afterClose.emit();
  }

  ngOnDestroy() {
    if (this.isOpen) {
      this.elementRef.nativeElement.close();
      this.toggleBodyOverflow(false);
    }
  }
}
