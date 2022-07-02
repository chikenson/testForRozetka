import { ElementArray, Element } from '../../../types'
import {normalizePrice} from '../../../helpers/helpers'
import { CartPage } from '../cart.page';

export class CartList {



    private get items(): ElementArray{
        return $$('[class*="cart-list__item"]')
    }

    private get counterInput(): Element {
        return $('[data-testid="cart-counter-input"]');
    }

    private get productPrices(): ElementArray {
        return $$('[data-testid="cost"]')
    }

    private get productTitle(): Element {
        return $('[data-testid="title"]')
    }

    private get kebabMenu(): Element{
        return $('#cartProductActions0')
    }

    private get deleteButton(): Element {
        return this.kebabMenu.nextElement().$('button')
    }

    async kebabMenuClick(): Promise<CartPage> {
        await this.kebabMenu.click()
    
        return new CartPage()
    }
    
    async deleteButtonClick(): Promise<CartList> {
        await this.deleteButton.click()
    
        return this
    }

    getCounterInputValue(): Promise<string> {
        return this.counterInput.getValue()
    }

    async getProductPrice(number): Promise<number> {
        let price = await this.productPrices[number - 1].getText()

        return normalizePrice(price)
    }

    getProductTitleValue(): Promise<string> {
        return this.productTitle.getText()
    }

    getNumberOfProducts(): Promise<number> {
        return this.items.length
    }

    async getProductPricesSum(): Promise<number> { 
        let length = await this.getNumberOfProducts()
        let sum = 0; 
        for(let i=1;i<=length;i++) {  
           let price = await this.getProductPrice(i)
           sum = sum + price
        }
        return sum
        
    }
}