import { TroutFinderPage } from './app.po';

describe('trout-finder App', () => {
  let page: TroutFinderPage;

  beforeEach(() => {
    page = new TroutFinderPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
