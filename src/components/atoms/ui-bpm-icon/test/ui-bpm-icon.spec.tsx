import { newSpecPage } from '@stencil/core/testing';

import { UiBpmIcon } from '../ui-bpm-icon';

describe('ui-bpm-icon', () => {
  let element;

  beforeEach(async () => {
    const page = await newSpecPage({
      components: [UiBpmIcon],
      html: `<ui-bpm-icon></ui-bpm-icon>`,
    });
    element = page.rootInstance;
  });

  test('Instancia del componente', () => {
    expect(element).toBeTruthy();
  });

  test('Se define el método getSVGClasses', () => {
    expect(element.getSVGClasses).toBeDefined();
  });

  test('Se define clases CSS por defecto', () => {
    const mockClass = {
      icon__base: true,
      'icon__type--base': true,
    };

    expect(element.getSVGClasses()).toEqual(mockClass);
  });
});
