import { MainPage, CartPage, CatalogPage } from '../pageObjects/index';
import { data  } from '../data/cartDelete/data';

describe('Delete from cart', function ()  {

    it('One product ', async function () {

        const mainPage: MainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(data.productName);
        await catalogPage.list.buyProducts(data.productAmount);

        const cartPage: CartPage = await CartPage.visit();

        await cartPage.list.cleanCart();

        expect(await cartPage.getEmptyCartValue()).toBe(data.emptyCartText);
        expect(await cartPage.header.cartCounterExisting()).toBe(false);
    });
});