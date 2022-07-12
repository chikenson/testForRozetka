import { Element } from '../../types';
import { CatalogPage } from '../catalogPage/catalog.page';
import { EntryWindow } from './entry.window';

export class Header {

  private get root(): Element {
    return $('header.header');
  }

  private get cartButton(): Element {
    return this.root.$('rz-cart');
  }

  private get cartButtonCounter(): Element{
    return this.cartButton.$('.counter');
  }

  private get searchInput(): Element {
    return $('[name="search"]');
  }

  private get searchButton(): Element {
    return $('button.search-form__submit');
  }

  private get entryButton(): Element {
    return $('.header-actions__item--user');
  }

  async getCartButtonCounterValue(): Promise <number>{
    const value = await this.cartButtonCounter.getText();

    return Number(value);
  }

  cartCounterExisting() {
    return this.cartButtonCounter.isExisting();
  }

  async entryButtonClick(): Promise<EntryWindow> {
    await this.entryButton.click();

    return new EntryWindow();
  }

  async search(value = " "): Promise<CatalogPage>{
    await this.searchInput.setValue(value);
    await this.searchButton.click();

    return new CatalogPage();
  }
 }