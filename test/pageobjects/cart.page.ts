import Page from './page';
import { Element } from '../types'
import header from './fragments/header'

class CartPage extends Page {
  header = header;

  open (): Promise<string> {
    return super.open('cart');
  }

  private get counterInput(): Element {
    return $('[data-testid="cart-counter-input"]');
  }

  private get productTitle(): Element {
    return $('[data-testid="title"]')
  }

  private get productPrice(): Element{
    return $('[data-testid="cost"] ')
  }

  counterInputValue(): Promise<string> {
    return this.counterInput.getValue()
  }

  productTitleValue(): Promise<string> {
    return this.productTitle.getText()
  }

  async productPriceValue(): Promise<string> {
    let price = await this.productPrice.getText();
    return price = price.slice(0, price.length - 2);
  }

}

export default new CartPage();