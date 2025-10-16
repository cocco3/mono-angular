import { Injectable } from '@angular/core';

@Injectable()
export class DialogContext {
  private _closeFn = () => {
    /* assigned later */
  };

  registerClose(fn: () => void) {
    this._closeFn = fn;
  }

  close() {
    this._closeFn();
  }
}
