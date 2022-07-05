import { MainPage, CartPage, CatalogPage } from '../../pageObjects/index';
import { addOneProduct } from '../../data/cartAddTestCounters';
import { validSearchValue } from '../../data/searchTestValues';

let mainPage;
let cartPage;

describe('Delete from cart', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(validSearchValue);
        await catalogPage.list.buyItems(addOneProduct);

        cartPage = await CartPage.visit();
     });

    it('One product ', async function () {

        await browser.refresh();

        expect(await cartPage.list.getNumberOfProducts()).toBe(1);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe("1");
    });
});