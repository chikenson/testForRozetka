import {mainPage, productPage, cartPage} from '../../pageObjects/index'
import { addedProductCounter } from '../../data/cartTestCounters';

describe('Events with cart.', () => {
    it('Adding product to the cart from product page.', async () => {
        await mainPage.open();
        
        const mainProductTitle: string = await mainPage.getDiscountBlockElementTitle();
        const mainProductPrice: string = await mainPage.getDiscountBlockElementPrice();

        await mainPage.discountBlockElementClick();
        
        await productPage.buyButtonClick()
        
        await cartPage.open();

        const counterInputValue: string = await cartPage.getCounterInputValue();
        const cartButtonCounterValue: string = await cartPage.header.cartButtonCounterValue();
        const cartProductTitleValue: string = await cartPage.getProductTitleValue();
        const cartSumPriceValue: string = await cartPage.getProductPriceValue();
        
        await expect(counterInputValue).toBe(addedProductCounter);
        await expect(cartButtonCounterValue).toBe(addedProductCounter);
        await expect(cartProductTitleValue).toBe(mainProductTitle);
        await expect(cartSumPriceValue).toBe(mainProductPrice);
    });
});