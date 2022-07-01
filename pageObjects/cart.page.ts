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

  private get kebabMenu(): Element{
    return $('#cartProductActions0')
  }

  private get deleteButton(): Element {
    return this.kebabMenu.nextElement().$('button')
  }

  async kebabMenuClick(): Promise<CartPage> {
    await this.kebabMenu.click()

    return this
  }

  async deleteButtonClick(): Promise<CartPage> {
    await this.deleteButton.click()

    return this
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

