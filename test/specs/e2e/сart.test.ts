import MainPage from  '../../pageObjects/main.page';
import ProductPage from '../../pageObjects/product.page';
import CartPage from '../../pageObjects/cart.page';
import Header from '../../pageObjects/header';

describe('Events with cart.', () => {
    it('Adding product to the cart from product page.', async () => {
        await MainPage.open();
        await browser.maximizeWindow();

        const mainProductTitle: string = await MainPage.discountBlockElementTitle.getText();
        const mainProductPrice: string = await MainPage.discountBlockElementPrice.getText();

        await MainPage.discountBlockElement.click();

        await ProductPage.buyButton.click();   
        
        await CartPage.open();

        await expect(CartPage.counterInput).toHaveValueContaining("1");
        await expect(CartPage.productTitle).toHaveTextContaining(mainProductTitle);
        await expect(Header.cartButtonCounter).toHaveTextContaining("1");
        await expect(CartPage.productPrice).toHaveTextContaining(mainProductPrice);
    });
});