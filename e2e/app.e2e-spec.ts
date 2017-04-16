import { TjrcaddPage } from './app.po';

describe('tjrcadd App', function() {
  let page: TjrcaddPage;

  beforeEach(() => {
    page = new TjrcaddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
