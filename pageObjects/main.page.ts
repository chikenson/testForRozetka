import Page from './page';
import {Header} from './fragments/header'
import { Element } from '../types'
import {ProductPage} from './product.page';
import {normalizePrice} from '../helpers/helpers'

export class MainPage extends Page {

  static async visit (): Promise<MainPage> {
    await super.open('');
    return new MainPage()
  }

  header = new Header();

  private get discountBlock(): Element {
    return $("//rz-goods-sections/section[1]");
  }

  private get discountBlockElement(): Element {
    return this.discountBlock.$('//rz-goods-section/ul/li[1]');
  }

  getDiscountBlockElementTitle(): Promise<string>{
    return this.discountBlockElement.$('//*[@class="tile__title"]').getText();
  }

  async getDiscountBlockElementPrice(): Promise<Number>{
    const price = await this.discountBlockElement.$('//*[@class="tile__price-value"]').getText();
    return normalizePrice(price)
  }

  async discountBlockElementClick(): Promise<ProductPage> {
    await this.discountBlock.$('//rz-goods-section/ul/li[1]').click();

    return new ProductPage()
  } 
}

