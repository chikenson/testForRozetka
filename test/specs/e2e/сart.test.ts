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

        await expect(cartPage.counterInput).toHaveValueContaining(productCounter);
        await expect(cartPage.productTitle).toHaveTextContaining(mainProductTitle);
        await expect(header.cartButtonCounter).toHaveTextContaining(productCounter);
        await expect(cartPage.productPrice).toHaveTextContaining(mainProductPrice);
    });
});