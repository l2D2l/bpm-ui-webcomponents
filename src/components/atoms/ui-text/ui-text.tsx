import { TextColor, TextSize, TextWeight } from '@global/types/text.type';
import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ui-text',
  styleUrl: 'ui-text.scss',
})
export class uiText {
  @Prop() readonly size: TextSize = 'base';
  @Prop() readonly color: TextColor = 'black';
  @Prop() readonly weight: TextWeight = 'normal';

  render() {
    return (
      <Host class={this.getClasses()}>
        <slot />
      </Host>
    );
  }

  private getClasses() {
    return {
      [`text--size-${this.size}`]: true,
      [`text--color-${this.color}`]: true,
      [`text--weight-${this.weight}`]: true,
    };
  }
}
