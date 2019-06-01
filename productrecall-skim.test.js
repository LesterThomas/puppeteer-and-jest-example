const escapeXpathString = str => {
  const splitedQuotes = str.replace(/'/g, `', "'", '`);
  return `concat('${splitedQuotes}', '')`;
};

const clickByText = async (page, text) => {
  const escapedText = escapeXpathString(text);
  const linkHandlers = await page.$x(`//a[contains(text(), ${escapedText})]`);
  
  if (linkHandlers.length > 0) {
    await linkHandlers[0].click();
  } else {
    throw new Error(`Link not found: ${text}`);
  }
};

describe('Product Recall', () => {
  beforeAll(async () => {
    await page.goto('http://product-recall.s3-website.eu-west-2.amazonaws.com');
  });

  it('Should display "Vodafone Retail Management platform" text on page', async () => {
    await expect(page).toMatch('Vodafone Retail Management platform');
  });
  it('Press View Products button', async () => {
    await clickByText(page, `View Products`);
  });
  it('Should display Products', async () => {
    await expect(page).toMatch('Products');
  });
  it('Should display table with heading Brand', async () => {
    await expect(page).toMatch('Brand');
  });
  it('Click on test product', async () => {
    await clickByText(page, `f0450180e20311e8bc2b7e33168b1b88`);
  });
  it('Should display Manage Product table ', async () => {
    await expect(page).toMatch('Manage Product');
  });
  it('Should display Product Instances table ', async () => {
    await expect(page).toMatch('Product Instances');
  });
 
  //test all the menus
  it('Click on Home menu', async () => {
    await clickByText(page, `Home`);
  });
  it('Should display "Vodafone Retail Management platform" ', async () => {
    await expect(page).toMatch('Vodafone Retail Management platform');
  });

  it('Click on Products menu', async () => {
    await clickByText(page, `Products`);
  });
  it('Should display "Products" ', async () => {
    await expect(page).toMatch('Products');
  });

  it('Click on Settings menu', async () => {
    await clickByText(page, 'Settings');
  });
  it('Should display "Settings" ', async () => {
    await expect(page).toMatch('Settings');
  });

  it('Click on Management menu', async () => {
    await clickByText(page, 'Management');
  });
  it('Should display "Item Management" ', async () => {
    await expect(page).toMatch('Item Management');
  });


  it('Click on About  menu', async () => {
    await clickByText(page, 'About');
  });
  it('Should display "About - Vodafone Retail Management platform" ', async () => {
    await expect(page).toMatch('About - Vodafone Retail Management platform');
  });


});
