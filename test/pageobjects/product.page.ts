import { Element } from '../types'
import header from './fragments/header'

class ProductPage {
  header = header;

  private get buyButton(): Element {
    return $("//app-product-buy-btn/app-buy-button/button");
  }

  async buyButtonClick(): Promise<void>{
    await this.buyButton.moveTo();
    await this.buyButton.click();
  }
}

export default new ProductPage();