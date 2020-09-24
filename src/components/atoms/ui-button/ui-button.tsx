import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton {
  render() {
    return (
      <Host>
        <button class="button-ui">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
