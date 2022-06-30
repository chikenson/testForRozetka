import { Element } from '../../types'
import { CatalogPage } from '../catalogPage/catalog.page';

export class Header {

  private get root(): Element {
    return $('rz-header');
  }
 
  private get cartButton(): Element {
    return this.root.$('rz-cart > button');
  }

  private get cartButtonCounter(): Element{
    return this.cartButton.$('[class*="counter "]');
  }

  private get searchInput(): Element {
    return $('[name="search"]')
  }

  private get searchButton(): Element {
    return $('button[class*="search-form__submit"]')
  }

  private get accountButton(): Element {
    return $('[class*="header-actions__item--user"]')
  }

  getCartButtonCounterValue(): Promise <string>{
    return this.cartButtonCounter.getText()
  }

  async accountButtonClick(): Promise<Header> {
    await this.accountButton.click()

    return this
  }

  async search(value): Promise<CatalogPage>{
    await this.searchInput.setValue(value)
    await this.searchButton.click()

    return new CatalogPage()
  }
 }