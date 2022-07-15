import { helpers } from '../../../helpers/helpers';
import { Element, ElementArray } from '../../../types';
import { CatalogPage } from '../catalog.page';

export class CatalogList {

    private get content(): Element {
        return $('.content_type_catalog');
    }

    private get contentEmptyValue(): Element {
        return this.content.$('.catalog-empty');
    }

    private get items(): ElementArray {
        return this.content.$$('.catalog-grid__cell');
    }

    getEmpyContentText(): Promise<string> {
        return this.contentEmptyValue.getText();
    }

    getItemTitle(): Promise<string> {
        return this.items[0].$('.goods-tile__title').getText();
    }

    async getItemPrice(): Promise<number> {
        const price = await this.items[0].$('[class="goods-tile__price-value"]').getText();

        return helpers.normalizePrice(price);
    }

    async buyProducts(amountOfProducts: number): Promise<CatalogPage> {
        for(let i = 0; i <= (amountOfProducts - 1); i++) {
             await this.items[i].$('[class*="buy-button"]').click();
        }

        return new CatalogPage();
    }
}