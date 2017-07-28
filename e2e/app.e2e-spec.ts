import { EstatisticaPage } from './app.po';

describe('estatistica App', () => {
  let page: EstatisticaPage;

  beforeEach(() => {
    page = new EstatisticaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
