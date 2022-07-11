import { Element } from '../types';
import { Header } from './fragments/header';

export class ProductPage {
  header = new Header();

  private get buyButton(): Element {
    return $('rz-product-main-info .buy-button');
  }

  async buyButtonClick(): Promise<ProductPage>{
    await this.buyButton.moveTo();
    await this.buyButton.click();

    return this;
  }
}