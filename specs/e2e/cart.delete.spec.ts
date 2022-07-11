import { MainPage, CartPage, CatalogPage } from '../../pageObjects/index';
import { emptyCartText, oneProduct, searchValue  } from '../../data/cart.delete.data';

let mainPage;
let cartPage;

describe('Refresh the cart', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(searchValue);
        await catalogPage.list.buyItems(oneProduct);

        cartPage = await CartPage.visit();
     });

    it('One product ', async function () {

        await cartPage.list.cleanCart();

        expect(await cartPage.getEmptyCartValue()).toBe(emptyCartText);
        expect(await cartPage.header.cartCounterExisting()).toBe(false);
    });
});