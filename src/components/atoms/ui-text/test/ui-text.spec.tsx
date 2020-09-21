import { newSpecPage } from '@stencil/core/testing';

import { uiText } from '../ui-text';

describe('ui-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [uiText],
      html: `<ui-text></ui-text>`,
    });

    expect(page.root).toEqualHtml(`
      <ui-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-text>
    `);
  });
});
