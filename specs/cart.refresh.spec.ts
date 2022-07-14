import { MainPage, CartPage, CatalogPage } from '../pageObjects/index';
import { data } from '../data/cartRefresh/cart.refresh.data';

let mainPage: MainPage;
let cartPage: CartPage;

describe('Refresh cart', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(data.searchValue);
        await catalogPage.list.buyProducts(data.productAmount);

        cartPage = await CartPage.visit();
     });

    it('One product ', async function () {

        await browser.refresh();

        expect(await cartPage.list.getNumberOfProducts()).toBe(data.productAmount);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe(data.productAmount);
    });
});