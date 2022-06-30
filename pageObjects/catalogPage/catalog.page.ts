import Page from './../page';
import { Element } from '../../types'
import {Header} from './../fragments/header'
import { List } from './elements/list';

export class CatalogPage extends Page {

    title(){
        return $('h1[class*="catalog-heading"]')
    }

    list = new List();

}