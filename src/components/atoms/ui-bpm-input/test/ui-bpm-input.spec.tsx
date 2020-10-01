import { newSpecPage } from '@stencil/core/testing';
import { UiBpmInput } from '../ui-bpm-input';

describe('ui-bpm-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiBpmInput],
      html: `<ui-bpm-input></ui-bpm-input>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-bpm-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-bpm-input>
    `);
  });
});
