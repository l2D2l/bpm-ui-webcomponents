import { newSpecPage } from '@stencil/core/testing';

import { uiDropdown } from '../ui-dropdown';

describe('ui-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [uiDropdown],
      html: `<ui-dropdown></ui-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-dropdown>
    `);
  });
});
