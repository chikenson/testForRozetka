import { MainPage, CartPage, CatalogPage } from '../pageObjects/index';
import { data }  from '../data/cartAmount/data';

let cartPage: CartPage;
let productTitle: string;

describe('Change amount of product', function ()  {

    beforeEach(async function () {
        const mainPage: MainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(data.productName);

        await catalogPage.list.buyProducts(data.productAmount);

        cartPage = await CartPage.visit();

        productTitle = await cartPage.list.getProductTitleValue();
     });

     afterEach(async function () {
        const cartPage = await CartPage.visit();

        await cartPage.list.cleanCart();

    });

    it.only('Valid value.', async function () {

        const productPrice = await cartPage.list.getProductPrice();

        await cartPage.list.setCounterInput(data.counterValidValue);

        await cartPage.waitUntilTotalAmountChanges();

        const totalAmount = await cartPage.getTotalAmount();

        expect(totalAmount).toBe(productPrice * data.counterValidValue);

    });

    it('Invalid max value', async function () {

        await cartPage.list.setCounterInput(data.maxCounterValue);

        await cartPage.list.getNotificationText();

        expect(await cartPage.list.getNotificationText()).toBe(data.maxNotification(productTitle));
    });

    it('Invalid min value', async function () {

        await cartPage.list.setCounterInput(data.minCounterValue);

        await cartPage.list.getNotificationText();

        expect(await cartPage.list.getNotificationText()).toBe(data.minNotification(productTitle));

    });

});