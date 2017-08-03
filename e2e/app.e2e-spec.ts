import { MEANAppPage } from './app.po';

describe('mean-app App', () => {
  let page: MEANAppPage;

  beforeEach(() => {
    page = new MEANAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
