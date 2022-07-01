import {MainPage, ProductPage, CartPage, CatalogPage} from '../../pageObjects/index'
import { addedProductCounter } from '../../data/cartTestCounters';
import {validSearchValue} from '../../data/searchTestValues';


let mainPage;

beforeEach(async () => {
   mainPage = await MainPage.visit();
});

afterEach(async () => {
    const cartPage = await CartPage.visit()
    await (await cartPage.kebabMenuClick()).deleteButtonClick()
    
})

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

    it('Adding product to the cart from catalog.', async () => {

        const catalogPage: CatalogPage = await mainPage.header.search(validSearchValue)
        
        const catalogProductTitle: string = await catalogPage.list.getItemTitle();
        const catalogProductPrice: string = await catalogPage.list.getItemPrice();
        
        await catalogPage.list.itemBuyButtonClick();
        
        const cartPage: CartPage = await CartPage.visit()
        
        expect(await cartPage.getCounterInputValue()).toBe(addedProductCounter);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe(addedProductCounter);
        expect(await cartPage.getProductTitleValue()).toBe(catalogProductTitle);
        expect(await cartPage.getProductPriceValue()).toBe(catalogProductPrice);
    });
});
