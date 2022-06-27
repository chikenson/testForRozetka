import Page from './page';
import header from './fragments/header'
import { Element } from '../types'

class MainPage extends Page {
  header = header;

  private get discountBlock(): Element {
    return $("//rz-goods-sections/section[1]");
  }

  private get discountBlockElement(): Element {
    return this.discountBlock.$('//rz-goods-section/ul/li[1]');
  }

  getDiscountBlockElementTitle(): Promise<string>{
    return this.discountBlockElement.$('//*[@class="tile__title"]').getText();
  }

  getDiscountBlockElementPrice(): Promise<string>{
    return this.discountBlockElement.$('//*[@class="tile__price-value"]').getText();
  }

  async discountBlockElementClick(): Promise<void> {
    await this.discountBlock.$('//rz-goods-section/ul/li[1]').click();
  }
  
  open (): Promise<string> {
    return super.open('');
  }
}

export default new MainPage();