import { BimProjectPage } from './app.po';

describe('bim-project App', () => {
  let page: BimProjectPage;

  beforeEach(() => {
    page = new BimProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
