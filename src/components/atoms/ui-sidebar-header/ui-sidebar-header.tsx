import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ui-sidebar-header',
  styleUrl: 'ui-sidebar-header.scss',
})
export class uiSidebarHeader {
  render() {
    return (
      <Host>
        <slot name="text" />
        <slot name="actions" />
      </Host>
    );
  }
}
