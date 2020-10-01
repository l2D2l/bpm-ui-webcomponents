import { newSpecPage } from '@stencil/core/testing';

import { UiBpmButton } from '../ui-bpm-button';

describe('Pruebas del componente ui-bpm-button', () => {
  let element;

  beforeEach(async () => {
    const page = await newSpecPage({
      components: [UiBpmButton],
      html: `<ui-bpm-button></ui-bpm-button>`,
    });
    element = page.rootInstance;
  });

  it('Instancia del componente', () => {
    expect(element).toBeTruthy();
  });

  it('Se define el método getButtonClasses', () => {
    expect(element.getButtonClasses).toBeDefined();
  });

  it('Se define clases por defecto', () => {
    const mockClass = {
      'button__type--base': true,
      'button__size--md': true,
      'button__width--auto': true,
      'button--loading': false,
      button__icon: false,
      'button--disabled': false,
    };

    const expectedClasses = element.getButtonClasses();

    expect(expectedClasses).toEqual(mockClass);
  });

  it('Se emite evento al presionar el botón', () => {
    const mockFuntion = jest.fn();
    const mockEvent = {
      target: {},
      stopPropagation: () => {
        return;
      },
    };
    element.disable = false;
    element.clicked = {
      emit: mockFuntion,
    };
    element['click'](mockEvent);
    expect(mockFuntion).toHaveBeenCalled();
  });

  it('No se emite evento al presionar botón deshabilitado', () => {
    const mockFunction = jest.fn();
    const mockEvent = {
      target: {},
      stopPropagation: () => {
        return;
      },
    };

    element.disable = true;

    element.buttonClicked = {
      emit: mockFunction,
    };

    element['click'](mockEvent);

    expect(mockFunction).not.toHaveBeenCalled();
  });
});
