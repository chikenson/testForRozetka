import { MainPage, CartPage, CatalogPage } from '../pageObjects/index';
import { data } from '../data/cartRefresh/cart.refresh.data';

describe('Refresh cart', function ()  {

    it('With one product', async function () {

        const mainPage: MainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(data.productName);
        await catalogPage.list.buyProducts(data.productAmount);

        const cartPage: CartPage = await CartPage.visit();

        await browser.refresh();

        expect(await cartPage.list.getNumberOfProducts()).toBe(data.productAmount);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe(data.productAmount);
    });
});