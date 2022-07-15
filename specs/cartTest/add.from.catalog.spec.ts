import { MainPage, CartPage, CatalogPage } from '../../pageObjects/index';
import data from '../../data/cartAdd/from.catalog';

describe('Adding product to the cart', function ()  {

    it('Add from catalog.', async function () {

        const mainPage: MainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(data.productName);

        const catalogProductTitle: string = await catalogPage.list.getItemTitle();
        const catalogProductPrice: number = await catalogPage.list.getItemPrice();

        await catalogPage.list.buyProducts(data.productAmount);

        const cartPage: CartPage = await CartPage.visit();

        expect(await cartPage.list.getCounterInputValue()).toBe(data.productAmount);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe(data.productAmount);
        expect(await cartPage.list.getProductTitleValue()).toBe(catalogProductTitle);
        expect(await cartPage.list.getProductPrice()).toBe(catalogProductPrice);
    });
});
