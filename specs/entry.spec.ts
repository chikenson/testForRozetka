import { data } from '../data/entry/data';
import { MainPage, EntryWindow } from '../pageObjects/index';

let mainPage: MainPage;
let entryWindow: EntryWindow;

describe('Registration', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        entryWindow = await mainPage.header.entryButtonClick();

     });

    it('with empty fields.', async function () {

        await entryWindow.submitButtonClick();

        expect(await entryWindow.getErrorMessageText()).toBe(data.emptyFieldrrorMessage);
    });

    it('With valid data.', async function () {

        await entryWindow.signUp(data.profile);

        expect(await entryWindow.getCaptchaText()).toBe(data.captchaMessage);

    });
});