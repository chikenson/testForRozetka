import { MainPage, CartPage, CatalogPage } from '../../pageObjects/index';
import  * as data  from '../../data/cart.amount.data';

let mainPage;
let cartPage;

describe('Change amount of product', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(data.searchValue);
        await catalogPage.list.buyItems(data.oneProduct);

        cartPage = await CartPage.visit();
     });

     afterEach(async function () {
        const cartPage = await CartPage.visit();

        await cartPage.list.cleanCart;
    });

    it('Valid amount.', async function () {

        const productPrice = await cartPage.list.getProductPrice();

        const counterValue: number = data.counterRandomValue;

        await cartPage.list.setCounterInput(counterValue);

        await browser.waitUntil(async () => (await cartPage.getTotalAmount()) === (productPrice*counterValue),
            {
            timeout: 10000,
            timeoutMsg: 'expected text to be different after 5s'
            }
        );

        const totalAmount = await cartPage.getTotalAmount();

        expect(totalAmount).toBe(productPrice * counterValue);

    });

    it('1000000 amount', async function () {

        await cartPage.list.setCounterInput(data.counterMillionValue);

        await cartPage.list.getNotificationText();

        expect(await cartPage.list.getNotificationText()).toBe(data.millionAmountNotification(await cartPage.list.getProductTitleValue()));
    });

    it('0 amount', async function () {

        await cartPage.list.setCounterInput(data.counterZeroValue);

        await cartPage.list.getNotificationText();

        expect(await cartPage.list.getNotificationText()).toBe(data.zeroAmountNotification(await cartPage.list.getProductTitleValue()));

    });

});