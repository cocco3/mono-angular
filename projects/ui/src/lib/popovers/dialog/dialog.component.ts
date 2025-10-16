import {
  Component,
  contentChildren,
  ElementRef,
  inject,
  input,
  output,
  Renderer2,
  type OnDestroy,
} from '@angular/core';
import { UiIconComponent } from '../../base/icon/icon.component';
import { DialogContext } from './dialog-context';
import { UiSlotDirective, useSlots } from '../../layout/slot/slot.directive';

@Component({
  imports: [UiIconComponent],
  providers: [DialogContext],
  selector: 'dialog[ui-dialog]',
  styleUrl: './dialog.css',
  templateUrl: './dialog.html',
})
export class UiDialogComponent implements OnDestroy {
  public readonly elementRef: ElementRef<HTMLDialogElement> = inject(
    ElementRef<HTMLDialogElement>
  );
  private readonly renderer = inject(Renderer2);
  private readonly context = inject(DialogContext);

  private readonly slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['cancel', 'submit']);

  heading = input<string>();
  description = input<string>();

  readonly afterClose = output();

  constructor() {
    this.context.registerClose(() => this.close());
  }

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
