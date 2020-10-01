import { newSpecPage } from '@stencil/core/testing';
import { UiBpmText } from '../ui-bpm-text';

describe('ui-bpm-text', () => {

  let element;

  beforeEach(async () => {
    const page = await newSpecPage({
      components: [UiBpmText],
      html: `<ui-bpm-text></ui-bpm-text>`,
    });
    element = page.rootInstance;
  });

  test('Instancia del componente', () => {
    expect(element).toBeTruthy();
  });

  test('Se define el método getClasses', () => {
    expect(element.getClasses).toBeDefined();
  });

  test('Se define las clases CSS por defecto', () => {
    const mockClass = {
      text: true,
      'text--align-left': true,
      'text--size-base': true,
      'text--color-blue-300': true,
      'text--underline': false,
      'text--weight-medium': true,
    };

    expect(element.getClasses()).toEqual(mockClass);
  });
});
