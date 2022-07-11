import { ElementArray, Element } from '../../../types';
import { helpers } from '../../../helpers/helpers';
//import { CartPage } from '../cart.page';

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

    private get kebabMenu(): ElementArray{
        return $$('.popup-menu__toggle');
    }

    private get deleteButton(): Element {
        return $('.popup-menu__item button');
    }

    private get notification(): Element {
        return $('[data-testid="notification"]');
    }

    async cleanCart() {
        const arr = await this.kebabMenu;

        for (const menu of arr) {
            await menu.click();
            await this.deleteButton.click();
        }
    }

    async getNotificationText(): Promise<string> {
        return this.notification.getText();
    }

    async setCounterInput(value: number): Promise<void> {
        await this.counterInput.setValue(value);
    }

    async getCounterInputValue(): Promise<number> {
        const value: string = await this.counterInput.getValue();

        return Number(value);
    }

    async getProductPrice(): Promise<number> {
        const price: string = await this.productPrices[0].getText();

        return helpers.normalizePrice(price);
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

        return strPrices.reduce((previousValue, currentValue) => previousValue + helpers.normalizePrice(currentValue), initialValue);
    }
}