import { normalizePrice } from '../../../helpers/helpers';
import { Element, ElementArray } from '../../../types';
import { CatalogPage } from '../catalog.page';

export class CatalogList {

    private get content(): Element {
        return $('[class*="content_type_catalog"]');
    }

    private get contentEmptyValue(): Element {
        return this.content.$('[class="catalog-empty"]');
    }

    private get items(): ElementArray {
        return this.content.$$('[class*="catalog-grid__cell"]');
    }

    getEmpyContentText(): Promise<string> {
        return this.contentEmptyValue.getText();
    }

    getItemTitle(number): Promise<string> {
        return this.items[number - 1].$('[class="goods-tile__title"]').getText();
    }

    async getItemPrice(number): Promise<number> {
        const price = await this.items[number - 1].$('[class="goods-tile__price-value"]').getText();

        return normalizePrice(price);
    }

    async buyItems(amount): Promise<CatalogPage> {
        for(let i = 0; i <= (amount - 1); i++) {
             await this.items[i].$('[class*="buy-button"]').click();
        }

        return new CatalogPage();
    }
}