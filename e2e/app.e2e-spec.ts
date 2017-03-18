import { MailgunPage } from './app.po';

describe('mailgun App', () => {
  let page: MailgunPage;

  beforeEach(() => {
    page = new MailgunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
