export default class Page {
  static open (path: string): Promise<string> {
    return browser.url(`https://rozetka.com.ua/${path}`);
  }
}