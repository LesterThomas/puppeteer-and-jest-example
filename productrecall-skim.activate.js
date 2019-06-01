describe('Product Recall', () => {
  beforeAll(async () => {
    await page.goto('http://product-recall.s3-website.eu-west-2.amazonaws.com');
  });

  it('should display "Vodafone Retail Management platform" text on page', async () => {
    await expect(page).toMatch('Vodafone Retail Management platform');
  });
});
