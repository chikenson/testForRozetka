import { Element } from '../types';
import { Header } from './fragments/header';

export class ProductPage {
  header = new Header();

  private get buyButton(): Element {
    return $("//app-product-buy-btn/app-buy-button/button");
  }

  async buyButtonClick(): Promise<ProductPage>{
    await this.buyButton.moveTo();
    await this.buyButton.click();

    return this;
  }
}