import Page from './../page';
import { Element } from '../../types'
import {Header} from './../fragments/header'
import { CatalogList } from './fragments/catalog.list';

export class CatalogPage extends Page {

    list = new CatalogList();

    header = new Header();

    private get title(): Element{
        return $('h1[class*="catalog-heading"]')
    }

    getTitleText(): Promise<string> {
        return this.title.getText()
    }

    

}