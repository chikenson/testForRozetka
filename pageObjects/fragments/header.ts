import { Element } from '../../types';
import { CatalogPage } from '../catalogPage/catalog.page';
import { LoginModal } from './login.modal';
import { MainPage } from './../main.page';

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

  private get languageOption(): Element {
    return $('ul.lang-header');
  }

  async rusLanguageOn(): Promise<MainPage> {
    await this.languageOption.$('[href="/"]').click();

    return new MainPage();
  }

  async uaLanguageOn(): Promise<MainPage> {
    await this.languageOption.$('[href="/ua/"]').click();

    return new MainPage();
  }

  async getCartButtonCounterValue(): Promise <number>{
    const value = await this.cartButtonCounter.getText();

    return Number(value);
  }

  cartCounterExisting(): Promise<boolean> {
    return this.cartButtonCounter.isExisting();
  }

  async entryButtonClick(): Promise<LoginModal> {
    await this.entryButton.click();

    return new LoginModal();
  }

  async search(value = " "): Promise<CatalogPage>{
    await this.searchInput.setValue(value);
    await this.searchButton.click();

    return new CatalogPage();
  }
 }