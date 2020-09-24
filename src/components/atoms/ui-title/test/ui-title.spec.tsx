import { newSpecPage } from '@stencil/core/testing';

import { uiTitle } from '../ui-title';

describe('ui-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [uiTitle],
      html: `<ui-title></ui-title>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-title>
    `);
  });
});
