import Page from '../page';
import { Element } from '../../types';
import { Header } from '../fragments/header';
import { CartList } from './fragments/cart.list';
import { helpers } from '../../helpers/helpers';

export class CartPage extends Page {

  static async visit (): Promise<CartPage> {
     await super.open('cart');

     return new CartPage();
  }

  list = new CartList();
  header = new Header();

  private get totalAmount(): Element {
    return $('.cart-receipt__sum-price');
  }

  private get emptyCartValue(): Element {
    return $('h4.cart-dummy__heading');
  }

  getEmptyCartValue(): Promise<string> {
    return this.emptyCartValue.getText();
  }

  async getTotalAmount(): Promise<number> {
    const totalAmount: string = await this.totalAmount.getText();

    return helpers.normalizePrice(totalAmount);
  }
}

