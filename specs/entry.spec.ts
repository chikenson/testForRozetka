import { data } from '../data/entry/data';
import { MainPage, LoginModal } from '../pageObjects/index';

let mainPage: MainPage;
let loginModal: LoginModal;

describe('SignIn', function ()  {

    beforeEach(async function () {
        mainPage = await MainPage.visit();

        loginModal = await mainPage.header.entryButtonClick();
     });

    it('with empty fields.', async function () {

        await loginModal.submitButtonClick();

        expect(await loginModal.getErrorMessageText()).toBe(data.emptyFieldrrorMessage);
    });

    it('With valid data.', async function () {

        await loginModal.signIn(data.profile);

        expect(await loginModal.getCaptchaText()).toBe(data.captchaMessage);
    });
});