import { newE2EPage } from '@stencil/core/testing';

describe('ui-testeo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-testeo></ui-testeo>');

    const element = await page.find('ui-testeo');
    expect(element).toHaveClass('hydrated');
  });
});
