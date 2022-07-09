import { MainPage, CartPage, CatalogPage } from '../../pageObjects/index';
import { validSearchValue, addOneProduct } from '../../data/cart.refresh.data';

let mainPage;
let cartPage;

describe('Refresh cart', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(validSearchValue);
        await catalogPage.list.buyItems(addOneProduct);

        cartPage = await CartPage.visit();
     });

    it('One product ', async function () {

        await browser.refresh();

        expect(await cartPage.list.getNumberOfProducts()).toBe(addOneProduct);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe(addOneProduct);
    });
});