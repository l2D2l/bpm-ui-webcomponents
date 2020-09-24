import { newSpecPage } from '@stencil/core/testing';
import { UiTesteo } from '../ui-testeo';

describe('ui-testeo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiTesteo],
      html: `<ui-testeo></ui-testeo>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-testeo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-testeo>
    `);
  });
});
