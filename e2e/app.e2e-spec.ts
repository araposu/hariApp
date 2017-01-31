import { HariAppPage } from './app.po';

describe('hari-app App', function() {
  let page: HariAppPage;

  beforeEach(() => {
    page = new HariAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
