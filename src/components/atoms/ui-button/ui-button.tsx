import { Component, Host, h, Prop, Element } from '@stencil/core';
import { InputType } from '../../../global/types/input.type';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.scss',
  shadow: true,
})
export class UiButton {

  @Element() el!: HTMLElement;

  @Prop() readonly type:InputType = 'button';
  @Prop({ reflect: true }) disabled = false;

  private handleClick = (ev: Event) => {
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();
        const fakeButton = document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    
  }

  render() {
    return (
      <Host  >
        <button class="button" disabled={this.disabled} onClick={this.handleClick}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
