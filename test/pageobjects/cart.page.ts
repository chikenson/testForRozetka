import Page from './page';

class CartPage extends Page {

   open () {
     return super.open('cart');
    }

   get counterInput() {
    return $('//rz-cart-counter//input');
   }

   get addedElement() {
    return $('//rz-cart-product/div/div[1]')
   }

}

export default new CartPage();