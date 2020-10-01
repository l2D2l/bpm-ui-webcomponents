import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ui-bpm-input',
  styleUrl: 'ui-bpm-input.css',
  shadow: true,
})
export class UiBpmInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
