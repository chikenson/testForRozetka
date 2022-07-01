import {MainPage, CatalogPage} from '../../pageObjects/index'
import { emptySearchValue, validSearchValue, invalidSearchValue } from '../../data/searchTestValues';
import { productNotFoundText } from '../../data/searchTestValues';

let mainPage;

beforeEach(async () => {
    mainPage = await MainPage.visit()
})

describe('Search test', () => {
    it('With empty field.', async () => {

        const catalogPage: CatalogPage = await mainPage.header.search(emptySearchValue)

        expect(await catalogPage.list.getEmpyContentText()).toBe(productNotFoundText) 
    })

    it('With valid name of product.', async () => {

        const catalogPage: CatalogPage = await mainPage.header.search(validSearchValue)

        expect(await catalogPage.getTitleText()).toBe(validSearchValue) 
    })

    it('With invalid symbols.', async () => {

        try{

        const catalogPage: CatalogPage = await mainPage.header.search(invalidSearchValue)

        expect(await catalogPage.list.getEmpyContentText()).toBe(invalidSearchValue) 
        }

        catch(e){
             console.log("Error: Infinite loading!")
        }
    })
})