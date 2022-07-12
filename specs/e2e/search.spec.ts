import { MainPage, CatalogPage } from '../../pageObjects/index';
import { validData } from '../../data/search/valid.data';
import { invalidData } from '../../data/search/invalid.data';
import { emptyFieldData } from '../../data/search/empty.field.data';

let mainPage: MainPage;

describe('Search test', function() {
    beforeEach(async function() {
        mainPage = await MainPage.visit();
    });

    it('With empty field.', async function() {

        const catalogPage: CatalogPage = await mainPage.header.search();

        expect(await catalogPage.list.getEmpyContentText()).toBe(emptyFieldData.productNotFoundText);
    });

    it('With valid name of product.', async function() {

        const catalogPage: CatalogPage = await mainPage.header.search(validData.searchValue);

        expect(await catalogPage.getTitleText()).toBe(validData.searchValue);
    });

    // eslint-disable-next-line mocha/no-skipped-tests
    it.skip('With invalid symbols.', async function() {

        const catalogPage: CatalogPage = await mainPage.header.search(invalidData.searchValue);

        expect(await catalogPage.list.getEmpyContentText()).toBe(invalidData.productNotFoundText);
    });
    // Find the bug, infinity loading
});