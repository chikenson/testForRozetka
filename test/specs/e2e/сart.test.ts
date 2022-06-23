import MainPage from  '../../pageObjects/main.page';
import ProductPage from '../../pageObjects/product.page';
import CartPage from '../../pageObjects/cart.page';

describe('Events with cart.', () => {
    it('Adding product to the cart from product page.', async () => {
        await MainPage.open();
        await browser.maximizeWindow()
        await MainPage.discountBoxElement.isDisplayed()
        await MainPage.discountBoxElement.click()

        await ProductPage.buyButton.click()      

        await CartPage.open()

        expect(CartPage.counterInput).toHaveValueContaining("1")


        
    });
});


