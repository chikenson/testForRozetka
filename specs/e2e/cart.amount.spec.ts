import { MainPage, CartPage, CatalogPage } from '../../pageObjects/index';
import { addOneProduct } from '../../data/cartTestCounters';
import { validSearchValue } from '../../data/searchTestValues';

let mainPage;
let cartPage;

describe('Change amount of product', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        const catalogPage: CatalogPage = await mainPage.header.search(validSearchValue);
        await catalogPage.list.buyItems(addOneProduct);

        cartPage = await CartPage.visit();
     });

     it('Valid amount.', async function () {

        const productPrice = await cartPage.list.getProductPrice();

        await cartPage.list.setCounterInput(4);

        const totalAmount = await cartPage.getTotalAmount();

        expect(totalAmount).toBe(productPrice * 4);

    });

    it('1000000 amount', async function () {

        const millionAmountNotification = `Товар ${await cartPage.list.getProductTitleValue()} отпускается в количестве не больше 999999 единиц`;

        await cartPage.list.setCounterInput(1000000);

        await cartPage.list.getNotificationText();

        expect(await cartPage.list.getNotificationText()).toBe(millionAmountNotification);
    });

    it('0 amount', async function () {

        const zeroAmountNotification = `Товар ${await cartPage.list.getProductTitleValue()} отпускается в количестве не меньше 1 единицы`;

        await cartPage.list.setCounterInput(0);

        await cartPage.list.getNotificationText();

        expect(await cartPage.list.getNotificationText()).toBe(zeroAmountNotification);

    });

});