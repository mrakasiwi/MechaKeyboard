import { KeyboardOnlinePage } from './app.po';

describe('keyboard-online App', function() {
  let page: KeyboardOnlinePage;

  beforeEach(() => {
    page = new KeyboardOnlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
