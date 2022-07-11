// import { profile, validateMessages } from '../../data/registration.data';
// import { RegistrationWindow } from '../../pageObjects/fragments/registration.window';
// import { VerifyWindow } from '../../pageObjects/fragments/verify.window';
// import { MainPage } from '../../pageObjects/index';

// let mainPage;
// let entryWindow;
// let registrationWindow;

// describe('Registration', function ()  {

//     beforeEach(async function () {
//         mainPage = await MainPage.visit();

//         entryWindow = await mainPage.header.entryButtonClick();

//         registrationWindow = await entryWindow.registrationButtonClick();

//      });

//     it('with empty fields.', async function () {

//         await registrationWindow.submitButtonClick();

//         expect(await registrationWindow.getValidationMessages()).toEqual(validateMessages);
//     });

//     it.only('With valid data.', async function () {

//         await registrationWindow.setNameInput("Єгор");
//         await registrationWindow.setSurNameInput("Курочкін");
//         await registrationWindow.setPhoneInput(980955618);
//         await registrationWindow.setMailInput("sjvevln@gmail.com");
//         await registrationWindow.setPasswordInput("Ajmvi1");

//         await registrationWindow.submitButtonClick();

//         await browser.pause(30000)

//     });
// });
