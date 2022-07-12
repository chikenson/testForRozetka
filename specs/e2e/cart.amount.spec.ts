import { MainPage, CartPage, CatalogPage } from '../../pageObjects/index';
import { validData }  from '../../data/cartAmount/valid.value';
import { maxInvalidData }  from '../../data/cartAmount/invalid.max.value';
import { minInvalidData }  from '../../data/cartAmount/invalid.min.value';

let mainPage: MainPage;
let cartPage: CartPage;
let productTitle: string;

describe('Change amount of product', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(validData.searchValue);
        await catalogPage.list.buyItems(validData.productAmount);

        cartPage = await CartPage.visit();

        productTitle = await cartPage.list.getProductTitleValue();
     });

     afterEach(async function () {
        const cartPage = await CartPage.visit();

        await cartPage.list.cleanCart();

    });

    it('Valid value.', async function () {

        const productPrice = await cartPage.list.getProductPrice();

        await cartPage.list.setCounterInput(validData.counterValidValue);

        await cartPage.waitUntilTotalAmountChanges(validData.counterValidValue, productPrice);

        const totalAmount = await cartPage.getTotalAmount();

        expect(totalAmount).toBe(productPrice * validData.counterValidValue);

    });

    it('Invalid max value', async function () {

        await cartPage.list.setCounterInput(maxInvalidData.counterValue);

        await cartPage.list.getNotificationText();

        expect(await cartPage.list.getNotificationText()).toBe(maxInvalidData.notification(productTitle));
    });

    it('Invalid min value', async function () {

        await cartPage.list.setCounterInput(minInvalidData.counterValue);

        await cartPage.list.getNotificationText();

        expect(await cartPage.list.getNotificationText()).toBe(minInvalidData.notification(productTitle));

    });

});