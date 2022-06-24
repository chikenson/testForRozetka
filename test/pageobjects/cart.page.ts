import Page from './page';
import { Element } from '../types'

class CartPage extends Page {

   open (): Promise<string> {
     return super.open('cart');
    }

   get counterInput(): Element {
    return $('[data-testid="cart-counter-input"]');
   }

   get productTitle(): Element {
    return $('[data-testid="title"]')
   }

   get productPrice(): Element{
      return $('[data-testid="cost"]')
  }
}

export default new CartPage();