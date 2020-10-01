import { IconName, IconType } from '@global/types/icon.type';
import { Component, Host, h, Prop, State, Watch } from '@stencil/core';
import { IconSvg } from './ui-bpm-icon.svg';

@Component({
  tag: 'ui-bpm-icon',
  styleUrl: 'ui-bpm-icon.scss',
  shadow: true,
})
export class UiBpmIcon {

  @Prop() readonly name: IconName = 'cheveron_next';
  @Prop() readonly color: string = '#0F265C';
  @Prop() readonly width: string = '16';
  @Prop() readonly height: string = '16';
  @Prop() readonly type: IconType = 'base';
  @Prop() readonly iconId = 'id';
  @Prop() readonly value: string = '';
  @State() id = '';

  componentWillLoad() {
    this.watchHandlerIconId(this.iconId);
  }

  @Watch('iconId')
  watchHandlerIconId(newValue: string) {
    if (newValue) {
      this.id = newValue;
    }
  }

  render() {
    const icon = IconSvg({ name: this.name, color: this.color });

    return (
      <Host>
        <svg
          id={this.getIconId()}
          class={this.getSVGClasses()}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={this.width}
          height={this.height}
          viewBox={icon.viewBox}
        >
          {icon.components}
        </svg>
      </Host>
    );
  }

  private getSVGClasses() {
    return {
      [`icon__base`]: true,
      [`icon__type--${this.type}`]: true,
    };
  }

  private getIconId() {
    return `icon-${this.iconId}`;
  }
}
