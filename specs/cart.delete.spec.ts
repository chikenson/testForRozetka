import { MainPage, CartPage, CatalogPage } from '../pageObjects/index';
import { data  } from '../data/cartDelete/data';

let mainPage: MainPage;
let cartPage: CartPage;

describe('Delete from cart', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(data.productName);
        await catalogPage.list.buyProducts(data.productAmount);

        cartPage = await CartPage.visit();
     });

    it('One product ', async function () {

        await cartPage.list.cleanCart();

        expect(await cartPage.getEmptyCartValue()).toBe(data.emptyCartText);
        expect(await cartPage.header.cartCounterExisting()).toBe(false);
    });
});