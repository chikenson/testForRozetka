import Page from './page';
import { Element } from '../types'
import {Header} from './fragments/header'

export class CartPage extends Page {
  
  static async visit (): Promise<CartPage> {
     await super.open('cart');

     return new CartPage();
  }

  header = new Header();

  private get counterInput(): Element {
    return $('[data-testid="cart-counter-input"]');
  }

  private get productTitle(): Element {
    return $('[data-testid="title"]')
  }

  private get productPrice(): Element{
    return $('[data-testid="cost"] ')
  }

  getCounterInputValue(): Promise<string> {
    return this.counterInput.getValue()
  }

  getProductTitleValue(): Promise<string> {
    return this.productTitle.getText()
  }

  async getProductPriceValue(): Promise<string> {
    let price = await this.productPrice.getText();

    return price.slice(0, price.length - 2);
  }

}

