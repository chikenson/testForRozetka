import { ElementArray, Element } from '../../../types';
import { normalizePrice } from '../../../helpers/helpers';
import { CartPage } from '../cart.page';

export class CartList {

    private get items(): ElementArray{
        return $$('.cart-list__item');
    }

    private get counterInput(): Element {
        return $('[data-testid="cart-counter-input"]');
    }

    private get productPrices(): ElementArray {
        return $$('[data-testid="cost"]');
    }

    private get productTitle(): Element {
        return $('[data-testid="title"]');
    }

    private get kebabMenu(): Element{
        return $('#cartProductActions0');
    }

    private get deleteButton(): Element {
        return this.kebabMenu.nextElement().$('button');
    }

    private get notification() {
        return $('[data-testid="notification"]');
    }

    async getNotificationText() {
        return this.notification.getText();
    }

    async setCounterInput(value) {
        await this.counterInput.setValue(value);
    }

    async kebabMenuIsDisplayed(): Promise<boolean> {
        return await this.kebabMenu.isDisplayed();
    }

    async kebabMenuClick(): Promise<CartPage> {
        await this.kebabMenu.click();

        return new CartPage();
    }

    async deleteButtonClick(): Promise<CartList> {
        await this.deleteButton.click();

        return this;
    }

    async getCounterInputValue(): Promise<number> {
        const value: string = await this.counterInput.getValue();

        return Number(value);
    }

    async getProductPrice(): Promise<number> {
        const price: string = await this.productPrices[0].getText();

        return normalizePrice(price);
    }

    getProductTitleValue(): Promise<string> {
        return this.productTitle.getText();
    }

    getNumberOfProducts(): Promise<number> {
        return this.items.length;
    }

    async getProductPricesSum(): Promise<number> {
        const initialValue = 0;

        const strPrices = await this.productPrices.map((item) => item.getText());

        return strPrices.reduce((previousValue, currentValue) => previousValue + normalizePrice(currentValue), initialValue);
    }
}