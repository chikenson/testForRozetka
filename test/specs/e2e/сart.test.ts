import {mainPage, productPage, cartPage} from '../../pageObjects/index'
import { productCounter } from '../../data/productCounter';

describe('Events with cart.', () => {
    it('Adding product to the cart from product page.', async () => {
        await mainPage.open();
        
        const mainProductTitle: string = await mainPage.discountBlockElementTitle();
        const mainProductPrice: string = await mainPage.discountBlockElementPrice();

        await mainPage.discountBlockElementClick();

        await productPage.buyButtonClick()
        
        await cartPage.open();

        const counterInputValue: string = await cartPage.counterInputValue();
        const cartButtonCounterValue: string = await cartPage.header.cartButtonCounterValue();
        const cartProductTitleValue: string = await cartPage.productTitleValue();
        const cartSumPriceValue: string = await cartPage.productPriceValue();
        
        await expect(counterInputValue).toBe(productCounter);
        await expect(cartButtonCounterValue).toBe(productCounter);
        await expect(cartProductTitleValue).toBe(mainProductTitle);
        await expect(cartSumPriceValue).toBe(mainProductPrice);
    });
});