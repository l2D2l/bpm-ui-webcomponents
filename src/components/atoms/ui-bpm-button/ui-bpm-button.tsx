import {
  ButtonSize,
  ButtonType,
  ButtonWidth,
  IconPosition
} from '@global/types/button.type';
import { IconName } from '@global/types/icon.type';
import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ui-bpm-button',
  styleUrl: 'ui-bpm-button.scss',
  shadow: true,
})
export class UiBpmButton {

  @Event() clicked: EventEmitter;

  @Prop() readonly label: string = '';
  @Prop() readonly type: ButtonType = 'base';
  @Prop() readonly size: ButtonSize = 'md';
  @Prop() readonly disabled: boolean = false;
  @Prop() readonly width: ButtonWidth = 'auto';
  @Prop() readonly isLoading = false;
  @Prop() readonly iconName: IconName;
  @Prop() readonly iconPosition: IconPosition = 'right';
  @Prop() readonly iconSize = 'sm';
  @Prop() readonly behavior: string = 'default';

  render() {
    return this.getRenderButton();
  }

  private getRenderButton() {
    return (
      <Host>
        <button
          class={this.getButtonClasses()}
          disabled={this.disabled}
          onClick={(event) => this.click(event)}
        >
          {this.getButtonContent()}
        </button>
      </Host>
    );
  }

  private getButtonContent() {
    if (this.isLoading) {
      // return <ui-button-loader></ui-button-loader>;
    }
    if (this.iconName) {
      return (
        <div class="button__content">
          {this.iconPosition === 'left' && <ui-icon name={this.iconName}></ui-icon>}
          <span>{this.label}</span>
          {this.iconPosition === 'right' && <ui-icon name={this.iconName}></ui-icon>}
        </div>
      );
    }
    return this.label;
  }

  private click(event: MouseEvent) {
    if (this.disabled) return;

    this.clicked.emit(this.behavior);
    event.stopPropagation();
  }

  private getButtonClasses() {
    return {
      [`button__type--${this.type}`]: true,
      [`button__size--${this.size}`]: true,
      [`button__width--${this.width}`]: true,
      [`button--loading`]: this.isLoading,
      [`button__icon`]: !!this.iconName,
      [`button--disabled`]: this.disabled,
    };
  }

}
