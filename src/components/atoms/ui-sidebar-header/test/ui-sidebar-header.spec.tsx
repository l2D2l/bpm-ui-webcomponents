import { newSpecPage } from '@stencil/core/testing';

import { uiSidebarHeader } from '../ui-sidebar-header';

describe('ui-sidebar-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [uiSidebarHeader],
      html: `<ui-sidebar-header></ui-sidebar-header>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-sidebar-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-sidebar-header>
    `);
  });
});
