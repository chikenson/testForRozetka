import { Element, ElementArray } from '../../../types'
import { CatalogPage } from '../catalog.page'

export class List {

    get content(): Element {
        return $('[class*="content_type_catalog"]')
    }
    
    get items() {
        return this.content.$$('[class="goods-tile__title"]')
    }

    async getItemsName() {
        await this.items.map(item => item.getText())
    }

}