import {MainPage, ProductPage, CartPage} from '../../pageObjects/index'

let mainPage;

beforeEach(async () => {
    mainPage = await MainPage.visit()
})

describe('Search test', () => {
    it.only('With empty field.', async () => {

        await mainPage.header.search()
    })
})