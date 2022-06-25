import { Element } from '../types'

class ProductPage {
    private get buyButton(): Element {
        return $("//app-product-buy-btn/app-buy-button/button");
    }

    async buyButtonClick(): Promise<void>{
        await this.buyButton.click();
    }
}

export default new ProductPage();