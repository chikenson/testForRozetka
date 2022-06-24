import Page from './page';

class CartPage extends Page {

   open () {
     return super.open('cart');
    }

   get counterInput() {
    return $('[data-testid="cart-counter-input"]');
   }

   get productTitle() {
    return $('[data-testid="title"]')
   }

   get productPrice(){
      return $('[data-testid="cost"]')
  }
}

export default new CartPage();