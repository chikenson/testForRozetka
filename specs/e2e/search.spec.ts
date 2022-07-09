import { MainPage, CatalogPage } from '../../pageObjects/index';
import { emptySearchValue, validSearchValue, invalidSearchValue, productNotFoundText } from '../../data/search.data';

let mainPage;

describe('Search test', function() {
    beforeEach(async function() {
        mainPage = await MainPage.visit();
    });

    it('With empty field.', async function() {

        const catalogPage: CatalogPage = await mainPage.header.search(emptySearchValue);

        expect(await catalogPage.list.getEmpyContentText()).toBe(productNotFoundText);
    });

    it('With valid name of product.', async function() {

        const catalogPage: CatalogPage = await mainPage.header.search(validSearchValue);

        expect(await catalogPage.getTitleText()).toBe(validSearchValue);
    });

    // eslint-disable-next-line mocha/no-skipped-tests
    it.skip('With invalid symbols.', async function() {

        const catalogPage: CatalogPage = await mainPage.header.search(invalidSearchValue);

        expect(await catalogPage.list.getEmpyContentText()).toBe(invalidSearchValue);
    });
    // Find the bug, infinity loading
});