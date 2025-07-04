import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/dom';

export const UiPopoverPlacements = {
  'above-start': 'top-start',
  'above-center': 'top',
  'above-end': 'top-end',

  'after-start': 'right-start',
  'after-center': 'right',
  'after-end': 'right-end',

  'below-start': 'bottom-start',
  'below-center': 'bottom',
  'below-end': 'bottom-end',

  'before-start': 'left-start',
  'before-center': 'left',
  'before-end': 'left-end',
} as const;
export type UiPopoverPlacement = keyof typeof UiPopoverPlacements;

type UiPopoverOptions = {
  offset: number;
  placement: UiPopoverPlacement;
  edgePadding: number;
};

/**
 * Uses [floating-ui](https://floating-ui.com)
 * for positioning floating elements.
 */
export class UiPopover {
  private floatingEl: HTMLElement;
  private anchorEl: HTMLElement;
  private options: UiPopoverOptions;

  constructor(
    _floating: HTMLElement,
    _anchor: HTMLElement,
    _options?: Partial<UiPopoverOptions>
  ) {
    this.floatingEl = _floating;
    this.anchorEl = _anchor;

    const defaultOptions: UiPopoverOptions = {
      offset: 0,
      placement: 'above-center',
      edgePadding: 0,
    };

    this.options = {
      ...defaultOptions,
      ..._options,
    };
  }

  /**
   * Calculate coordinates of floating element relative to anchor.
   *
   * @param callback Callback with x and y coordinates.
   * @returns A cleanup function when floatin element is hidden or removed.
   */
  public calcPosition(callback: (x: number, y: number) => void) {
    const floatingPlacement = UiPopoverPlacements[this.options.placement];

    return autoUpdate(this.anchorEl, this.floatingEl, () => {
      computePosition(this.anchorEl, this.floatingEl, {
        middleware: [
          offset(this.options.offset),
          flip(),
          shift({ padding: this.options.edgePadding }),
        ],
        placement: floatingPlacement,
      }).then(({ x, y }) => {
        callback(x, y);
      });
    });
  }
}
