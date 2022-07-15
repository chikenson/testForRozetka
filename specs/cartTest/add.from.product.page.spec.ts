import { MainPage, ProductPage, CartPage } from '../../pageObjects/index';
import data from '../../data/cartAdd/from.product.page';

describe('Adding product to the cart', function ()  {

    it('Add from product page.', async function () {

        const mainPage: MainPage = await MainPage.visit();

        const mainProductTitle: string = await mainPage.getDiscountBlockElementTitle();
        const mainProductPrice: number = await mainPage.getDiscountBlockElementPrice();

        const productPage: ProductPage = await mainPage.discountBlockElementClick();

        await productPage.buyButtonClick();

        const cartPage: CartPage = await CartPage.visit();

        expect(await cartPage.list.getCounterInputValue()).toBe(data.productAmount);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe(data.productAmount);
        expect(await cartPage.list.getProductTitleValue()).toBe(mainProductTitle);
        expect(await cartPage.list.getProductPrice()).toBe(mainProductPrice);
    });
});