import { Component, Host, h, Prop } from '@stencil/core';
import { TextAlign, TextColor, TextSize, TextWeight } from '@global/types/text.type';

@Component({
  tag: 'ui-bpm-text',
  styleUrl: 'ui-bpm-text.scss',
})
export class UiBpmText {

  @Prop() readonly size: TextSize = 'base';
  @Prop() readonly color: TextColor = 'blue-300';
  @Prop() readonly weight: TextWeight = 'medium';
  @Prop() readonly align: TextAlign = 'left';
  @Prop() readonly underLine: boolean = false;
  @Prop() readonly value: string = '';
  render() {
    return (
      <Host class={this.getClasses()} >
        <slot></slot>
      </Host>
    );
  }

  private getClasses() {
    return {
      [`text`]: true,
      [`text--size-${this.size}`]: true,
      [`text--color-${this.color}`]: true,
      [`text--weight-${this.weight}`]: true,
      [`text--align-${this.align}`]: true,
      [`text--underline`]: this.underLine,
    };
  }

}
