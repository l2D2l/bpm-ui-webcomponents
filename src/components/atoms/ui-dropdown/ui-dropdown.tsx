import { Component, Event, EventEmitter, h, Host, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'ui-dropdown',
  styleUrl: 'ui-dropdown.scss',
  shadow: false,
})
export class uiDropdown {
  @Prop({ mutable: true }) value = '001236195159';
  @Prop() readonly items: { label: string; value: string }[] = [
    { label: 'Ahorro Efectivo N° 001236195159 - Disponible S/ 10.00', value: '001236195159' },
    { label: 'Ahorro Efectivo N° 001236195151 - Disponible S/ 20.00', value: '001236195151' },
    { label: 'Ahorro Efectivo N° 001236195152 - Disponible S/ 5.00', value: '001236195152' },
  ];
  @Prop() readonly placeholder: string = 'Lista de cuentas de ahorro';
  @Event() valueChange: EventEmitter;
  @State() selected = '';
  @State() show = false;

  @Listen('click', { target: 'body' })
  handleClickOutside(e: MouseEvent) {
    e.stopPropagation();

    if (this.show) {
      this.show = false;
    }
  }

  render() {
    return (
      <Host class={this.getContainerClasses()} onClick={(e) => this.handleShow(e)}>
        <div class="dropdown__label">
          <ui-text size="sm" weight="bold">
            {this.getLabel(this.value)}
          </ui-text>
          <ui-icon name="cheveron-up" class="dropdown-icon__up"></ui-icon>
          <ui-icon name="cheveron-down" class="dropdown-icon__down"></ui-icon>
        </div>
        <ul class="dropdown__items">
          {this.items.map(({ label, value }) => (
            <li class="dropdown__item" value={value} onClick={(e) => this.itemClick(e, value)}>
              <ui-text size="sm">{label}</ui-text>
            </li>
          ))}
        </ul>
      </Host>
    );
  }

  private getContainerClasses() {
    return {
      ['dropdown--show']: this.show,
      ['dropdown']: true,
    };
  }
  private getLabel(value: string): string {
    if (!value) {
      return this.placeholder;
    }
    return this.items.find((item) => item.value === value).label;
  }

  private handleShow(e: MouseEvent) {
    e.stopPropagation();

    this.show = !this.show;
  }

  private itemClick(e: MouseEvent, value: string) {
    this.handleShow(e);

    console.log(this.items, value);
    this.value = this.items.find((item) => item.value === value).value;

    this.valueChange.emit(value);
  }
}
