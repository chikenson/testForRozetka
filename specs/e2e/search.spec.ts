import {MainPage, ProductPage, CartPage, CatalogPage} from '../../pageObjects/index'
import { searchValue } from '../../data/searchTestValue';

let mainPage;

beforeEach(async () => {
    mainPage = await MainPage.visit()
})

describe('Search test', () => {
    it('With empty field.', async () => {

        

        const catalogPage: CatalogPage = await mainPage.header.search(searchValue)

        await expect(catalogPage.title()).toHaveText(searchValue)



        
    })
})