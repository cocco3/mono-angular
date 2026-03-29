import { Injectable } from '@angular/core';
import { type UiDisclosureComponent } from './disclosure.component';

/**
 * Replicates the browser's native exclusive accordion behavior (the `name`
 * attribute on `<details>`) for browsers that do not support
 * `interpolate-size: allow-keywords`.
 *
 * In those browsers the JS animation fallback intercepts all open/close
 * actions, so the native `name` attribute is stripped from the element at
 * runtime to prevent the browser from closing sibling disclosures without
 * animation. This service takes over that responsibility: when a disclosure
 * expands it calls `closeOthers()`, which triggers an animated `collapse()`
 * on every other disclosure registered under the same group name.
 *
 * Once `interpolate-size: allow-keywords` is widely adopted, this service
 * can be removed.
 *
 * https://caniuse.com/mdn-css_properties_interpolate-size_allow-keywords
 */
@Injectable({ providedIn: 'root' })
export class DisclosureGroupService {
  private readonly groups = new Map<string, Set<UiDisclosureComponent>>();

  register(disclosure: UiDisclosureComponent, name: string) {
    if (!this.groups.has(name)) {
      this.groups.set(name, new Set());
    }
    this.groups.get(name)?.add(disclosure);
  }

  unregister(disclosure: UiDisclosureComponent, name: string) {
    this.groups.get(name)?.delete(disclosure);
  }

  closeOthers(source: UiDisclosureComponent, name: string) {
    const group = this.groups.get(name);
    if (!group) return;
    for (const disclosure of group) {
      if (disclosure !== source) {
        disclosure.collapse();
      }
    }
  }
}
