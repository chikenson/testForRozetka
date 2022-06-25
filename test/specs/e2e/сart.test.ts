import {mainPage, productPage, cartPage, header} from '../../pageObjects/index'
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
        const cartButtonCounterValue: string = await header.cartButtonCounterValue();
        const cartProductTitleValue: string = await cartPage.productTitleValue();
        const cartProductPriceValue: string = await cartPage.productPriceValue();
        
        await expect(counterInputValue).toEqual(productCounter);
        await expect(cartButtonCounterValue).toEqual(productCounter);
        await expect(cartProductTitleValue).toEqual(mainProductTitle);
        await expect(cartProductPriceValue).toEqual(mainProductPrice);
    });
});