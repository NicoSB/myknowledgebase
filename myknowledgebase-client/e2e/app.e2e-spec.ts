import { MyknowledgebaseClientPage } from './app.po';

describe('myknowledgebase-client App', () => {
  let page: MyknowledgebaseClientPage;

  beforeEach(() => {
    page = new MyknowledgebaseClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
