import { MainPage, CartPage, CatalogPage } from '../../pageObjects/index';
import data from '../../data/cartAdd/few.products';

describe('Adding product to the cart', function ()  {

    it('Add few products to the cart.', async function () {

        const mainPage: MainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(data.productName);

        await catalogPage.list.buyProducts(data.productAmount);

        const cartPage: CartPage = await CartPage.visit();

        expect(await cartPage.list.getNumberOfProducts()).toBe(data.productAmount);
        expect(await cartPage.list.getProductPricesSum()).toBe(await cartPage.getTotalAmount());
    });
});