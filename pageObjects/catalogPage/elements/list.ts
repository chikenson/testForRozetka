import { Element, ElementArray } from '../../../types'
import { CatalogPage } from '../catalog.page'

export class List {

    private get content(): Element {
        return $('[class*="content_type_catalog"]')
    }

    private get contentEmptyValue(): Element {
        return this.content.$('[class="catalog-empty"]')
    }

    private get item(): Element {
        return this.content.$('[class*="catalog-grid__cell"]')
    }

    private get itemBuyButton(): Element {
        return this.item.$('[class*="buy-button"]')
    }

    getEmpyContentText(): Promise<string> {
        return this.contentEmptyValue.getText()
    }
    
    getItemTitle(): Promise<string> {
        return this.item.$('[class="goods-tile__title"]').getText()
    }

    getItemPrice(): Promise<string> {
        return this.item.$('[class="goods-tile__price-value"]').getText()
    }

    async itemBuyButtonClick(): Promise<CatalogPage> {
        await this.itemBuyButton.click()

        return new CatalogPage()
    }
}