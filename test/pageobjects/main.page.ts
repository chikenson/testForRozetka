import Page from './page';

import { Element } from '../types'

class MainPage extends Page {
    get discountBlock(): Element {
        return $("//rz-goods-sections/section[1]");
    }

    get discountBlockElement(): Element {
        return this.discountBlock.$('//rz-goods-section/ul/li[1]');
    }

    discountBlockElementTitle(): Promise<string>{
        return this.discountBlockElement.$('//*[@class="tile__title"]').getText();
    }

    discountBlockElementPrice(): Promise<string>{
        return this.discountBlockElement.$('//*[@class="tile__price-value"]').getText();
    }

    async discountBlockElementClick(): Promise<void> {
        await this.discountBlock.$('//rz-goods-section/ul/li[1]').click();
    }
  
    open () {
        return super.open('');
    }
}

export default new MainPage();
