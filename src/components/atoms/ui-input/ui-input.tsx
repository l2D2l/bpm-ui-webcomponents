import { Component, h, Host, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'ui-input',
  styleUrl: 'ui-input.scss',
  scoped: true
})
export class UiInput {

  @Prop({ mutable: true }) value?: string | number | null = '';

  @Prop() type: any = 'text';

  @Event() uiChange!: EventEmitter<any>; // se escuchara desde el proyecto Angular

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
  }

  @Watch('value')
  protected valueChanged() {
    this.uiChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }

  render() {
    return (
      <Host>
        <input
          class="input"
          type={this.type}
          onInput={this.onInput}
        />
      </Host>
    );
  }
}
