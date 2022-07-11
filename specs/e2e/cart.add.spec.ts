import { MainPage, ProductPage, CartPage, CatalogPage } from '../../pageObjects/index';
import { oneProduct, threeProducts, searchValue } from '../../data/cart.add.data';

let mainPage;

describe('Adding product to the cart', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();
     });

     afterEach(async function () {
        const cartPage = await CartPage.visit();

        await cartPage.list.cleanCart();
     });

    it('From product page.', async function () {

        const mainProductTitle: string = await mainPage.getDiscountBlockElementTitle();
        const mainProductPrice: number = await mainPage.getDiscountBlockElementPrice();

        const productPage: ProductPage = await mainPage.discountBlockElementClick();

        await productPage.buyButtonClick();

        const cartPage: CartPage = await CartPage.visit();

        expect(await cartPage.list.getCounterInputValue()).toBe(oneProduct);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe(oneProduct);
        expect(await cartPage.list.getProductTitleValue()).toBe(mainProductTitle);
        expect(await cartPage.list.getProductPrice()).toBe(mainProductPrice);
    });

    it('From catalog.', async function () {

        const catalogPage: CatalogPage = await mainPage.header.search(searchValue);

        const catalogProductTitle: string = await catalogPage.list.getItemTitle();
        const catalogProductPrice: number = await catalogPage.list.getItemPrice();

        await catalogPage.list.buyItems(oneProduct);

        const cartPage: CartPage = await CartPage.visit();

        expect(await cartPage.list.getCounterInputValue()).toBe(oneProduct);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe(oneProduct);
        expect(await cartPage.list.getProductTitleValue()).toBe(catalogProductTitle);
        expect(await cartPage.list.getProductPrice()).toBe(catalogProductPrice);
    });

    it('Adding a few products to the cart.', async function () {

        const catalogPage: CatalogPage = await mainPage.header.search(searchValue);

        await catalogPage.list.buyItems(threeProducts);

        const cartPage: CartPage = await CartPage.visit();

        expect(await cartPage.list.getNumberOfProducts()).toBe(threeProducts);
        expect(await cartPage.list.getProductPricesSum()).toBe(await cartPage.getTotalAmount());
    });

});
