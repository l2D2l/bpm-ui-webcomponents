import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ui-tooltip',
  styleUrl: 'ui-tooltip.scss',
})
export class uiTooltip {
  render() {
    return (
      <Host>
        <slot />
        <div class="tooltip">
          <slot name="tooltip" />
        </div>
      </Host>
    );
  }
}
