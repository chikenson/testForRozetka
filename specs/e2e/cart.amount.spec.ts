import { MainPage, CartPage, CatalogPage } from '../../pageObjects/index';
import { addOneProduct } from '../../data/cartAddTestCounters';
import { validSearchValue } from '../../data/searchTestValues';
import { zeroAmountNotification, millionAmountNotification } from '../../data/cartAmountTestMessages';
import { counterIsMillion, counterIsRandomValid, counterIsZero } from '../../data/cartAmountProductCounters';

let mainPage;
let cartPage;

describe('Change amount of product', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(validSearchValue);
        await catalogPage.list.buyItems(addOneProduct);

        cartPage = await CartPage.visit();
     });

     afterEach(async function () {
        const cartPage = await CartPage.visit();

        await (await cartPage.list.kebabMenuClick()).list.deleteButtonClick();
    });

    it('Valid amount.', async function () {

        const productPrice = await cartPage.list.getProductPrice();

        const counterValue: number = counterIsRandomValid();

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

        await cartPage.list.setCounterInput(counterIsMillion);

        await cartPage.list.getNotificationText();

        expect(await cartPage.list.getNotificationText()).toBe(millionAmountNotification(await cartPage.list.getProductTitleValue()));
    });

    it('0 amount', async function () {

        await cartPage.list.setCounterInput(counterIsZero);

        await cartPage.list.getNotificationText();

        expect(await cartPage.list.getNotificationText()).toBe(zeroAmountNotification(await cartPage.list.getProductTitleValue()));

    });

});