import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ui-testeo',
  styleUrl: 'ui-testeo.css',
  shadow: true,
})
export class UiTesteo {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
