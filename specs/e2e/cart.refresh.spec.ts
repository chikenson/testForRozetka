import { MainPage, CartPage, CatalogPage } from '../../pageObjects/index';
import { searchValue, oneProduct } from '../../data/cart.refresh.data';

let mainPage;
let cartPage;

describe('Refresh cart', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(searchValue);
        await catalogPage.list.buyItems(oneProduct);

        cartPage = await CartPage.visit();
     });

    it('One product ', async function () {

        await browser.refresh();

        expect(await cartPage.list.getNumberOfProducts()).toBe(oneProduct);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe(oneProduct);
    });
});