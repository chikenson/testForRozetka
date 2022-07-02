import {MainPage, ProductPage, CartPage, CatalogPage} from '../../pageObjects/index'
import { addOneProduct, addThreeProduct } from '../../data/cartTestCounters';
import {validSearchValue} from '../../data/searchTestValues';


let mainPage;

beforeEach(async () => {
   mainPage = await MainPage.visit();
});

afterEach(async () => {
    const cartPage = await CartPage.visit()
    await (await cartPage.list.kebabMenuClick()).list.deleteButtonClick()
    
})

describe('Adding product to the cart', () => {
    it('From product page.', async () => {
        
        const mainProductTitle: string = await mainPage.getDiscountBlockElementTitle();
        const mainProductPrice: number = await mainPage.getDiscountBlockElementPrice();

        const productPage: ProductPage = await mainPage.discountBlockElementClick();
        
        await productPage.buyButtonClick()
        
        const cartPage: CartPage = await CartPage.visit()

        expect(await cartPage.list.getCounterInputValue()).toBe(addOneProduct);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe(addOneProduct);
        expect(await cartPage.list.getProductTitleValue()).toBe(mainProductTitle);
        expect(await cartPage.list.getProductPrice(1)).toBe(mainProductPrice);
    });

    it('From catalog.', async () => {

        const catalogPage: CatalogPage = await mainPage.header.search(validSearchValue)
        
        const catalogProductTitle: string = await catalogPage.list.getItemTitle(addOneProduct);
        const catalogProductPrice: Number = await catalogPage.list.getItemPrice(addOneProduct);
        
        await catalogPage.list.buyItems(addOneProduct);
        
        const cartPage: CartPage = await CartPage.visit()
        
        expect(await cartPage.list.getCounterInputValue()).toBe(addOneProduct);
        expect(await cartPage.header.getCartButtonCounterValue()).toBe(addOneProduct);
        expect(await cartPage.list.getProductTitleValue()).toBe(catalogProductTitle);
        expect(await cartPage.list.getProductPrice(1)).toBe(catalogProductPrice);
    });

    it('Adding a few products to the cart.', async () => {

        const catalogPage: CatalogPage = await mainPage.header.search(validSearchValue)
        
        await catalogPage.list.buyItems(addThreeProduct);
        
        const cartPage: CartPage = await CartPage.visit()

        const totalPrice: number = await cartPage.list.getProductPricesSum()
        
        console.log('Total price is ' + totalPrice)
        
        expect(await cartPage.list.getNumberOfProducts()).toBe(addThreeProduct);
        expect(await cartPage.list.getProductPricesSum()).toBe(await cartPage.getTotalAmount());
    });


});
