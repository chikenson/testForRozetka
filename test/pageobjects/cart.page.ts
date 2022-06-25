import Page from './page';
import { Element } from '../types'

class CartPage extends Page {
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
     return $('[data-testid="cost"]')
     }

   counterInputValue(): Promise<string> {
     return this.counterInput.getValue()
     }

   productTitleValue(): Promise<string> {
     return this.productTitle.getText()
     }

    productPriceValue(): Promise<string> {
     return this.productPrice.getText()
     }

}

export default new CartPage();