import { MainPage, CartPage, CatalogPage } from '../../pageObjects/index';
import { emptyCartText, addOneProduct, validSearchValue  } from '../../data/cart.delete.data';

let mainPage;
let cartPage;

describe('Refresh the cart', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(validSearchValue);
        await catalogPage.list.buyItems(addOneProduct);

        cartPage = await CartPage.visit();
     });

    it('One product ', async function () {

        await (await cartPage.list.kebabMenuClick()).list.deleteButtonClick();

        expect(await cartPage.getEmptyCartValue()).toBe(emptyCartText);
        expect(await cartPage.header.cartCounterExisting()).toBe(false);
    });
});