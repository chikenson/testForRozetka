import {MainPage, ProductPage, CartPage} from '../../pageObjects/index'
import { addedProductCounter } from '../../data/cartTestCounters';

let mainPage;

beforeEach(async () => {
   mainPage = await MainPage.visit();
});

describe('Events with cart.', () => {
    it('Adding product to the cart from product page.', async () => {
        
        const mainProductTitle: string = await mainPage.getDiscountBlockElementTitle();
        const mainProductPrice: string = await mainPage.getDiscountBlockElementPrice();

        const productPage: ProductPage = await mainPage.discountBlockElementClick();
        
        await productPage.buyButtonClick()
        
        const cartPage: CartPage = await CartPage.visit()
        
        expect(await cartPage.getCounterInputValue()).toBe(addedProductCounter);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe(addedProductCounter);
        expect(await cartPage.getProductTitleValue()).toBe(mainProductTitle);
        expect(await cartPage.getProductPriceValue()).toBe(mainProductPrice);
    });
});
