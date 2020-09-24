import { InputType } from '@global/types/input.type';
import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ui-input',
  styleUrl: 'ui-input.scss',
  shadow: true,
})
export class UiInput {

  @Prop() readonly type:InputType = 'text';
  @Prop() readonly placeholder: string;

  render() {
    return (
      <Host>
        <input 
            class="input"
            autocapitalize="off"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            type={this.type}
            placeholder={this.placeholder}
        />
      </Host>
    );
  }

}
