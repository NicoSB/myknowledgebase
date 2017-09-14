export class Entry {
  public id: Number;
  public title: string;
  public description: string;
  public codeSnippet: string;
  public url: string;
  public tags: string[];

  constructor(id: Number, title: string, description: string, codeSnippet: string, url: string, tags: string[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.codeSnippet = codeSnippet;
    this.url = url;
    this.tags = tags;

  }
}
