import { newSpecPage } from '@stencil/core/testing';

import { uiIcon } from '../ui-icon';

describe('ui-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [uiIcon],
      html: `<ui-icon></ui-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-icon>
    `);
  });
});
