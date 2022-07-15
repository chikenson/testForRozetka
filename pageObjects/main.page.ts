import Page from './page';
import { Header } from './fragments/header';
import { Element } from '../types';
import { ProductPage } from './product.page';
import { helpers } from '../helpers/helpers';

export class MainPage extends Page {

  static async visit (): Promise<MainPage> {
    await super.open('');

    return new MainPage();
  }

  header = new Header();

  private get discountBlock(): Element {
    return $('.main-goods__grid');
  }

  private get discountBlockElement(): Element {
    return this.discountBlock.$('.main-goods__cell');
  }

  getDiscountBlockElementTitle(): Promise<string>{
    return this.discountBlockElement.$('.tile__title').getText();
  }

  async getDiscountBlockElementPrice(): Promise<number>{
    const price = await this.discountBlockElement.$('.tile__price-value').getText();

    return helpers.normalizePrice(price);
  }

  async discountBlockElementClick(): Promise<ProductPage> {
    await this.discountBlockElement.click();

    return new ProductPage();
  }
}

