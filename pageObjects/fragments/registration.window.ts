import { Element } from "../../types";
import { VerifyWindow } from "./verify.window";

export class RegistrationWindow {

    private get content() {
        return $('div.modal__content');
    }

    private get nameInput(): Element {
        return $('#registerUserName');
    }

    private get surNameInput(): Element {
        return $('#registerUserSurname');
    }

    private get phoneInput(): Element {
        return $('#registerUserPhone');
    }

    private get mailInput(): Element {
        return $('#registerUserEmail');
    }

    private get passwordInput(): Element {
        return $('#registerUserPassword');
    }

    private get submitButton(): Element {
        return this.content.$('button[type="submit"]');
    }

    private get validationMessages() {
        return $$('p.validation-message');
    }

    async getValidationMessages(): Promise<string[]> {
        return await this.validationMessages.map((item) => item.getText());
    }

    async setNameInput(name: string): Promise<RegistrationWindow> {
        await this.nameInput.setValue(name);

        return new RegistrationWindow();
    }

    async setSurNameInput(surName: string): Promise<RegistrationWindow> {
        await this.surNameInput.setValue(surName);

        return new RegistrationWindow();
    }

    async setPhoneInput(phone: number): Promise<RegistrationWindow> {
        await this.phoneInput.setValue(phone);

        return new RegistrationWindow();
    }

    async setMailInput(mail: string): Promise<RegistrationWindow> {
        await this.mailInput.setValue(mail);

        return new RegistrationWindow();
    }

    async setPasswordInput(value: string): Promise<RegistrationWindow> {
        await this.passwordInput.setValue(value);

        return new RegistrationWindow();
    }

    async submitButtonClick(): Promise<VerifyWindow> {
        await this.submitButton.waitForClickable();
        await this.submitButton.click();

        return new VerifyWindow();
    }

    async register(profile): Promise<this> {
        await this.setNameInput(profile.name);
        await this.setSurNameInput(profile.surName);
        await this.setPhoneInput(profile.phone);
        await this.setMailInput(profile.mail);
        await this.setPasswordInput(profile.password);
        await this.submitButtonClick();

        return this;
    }

}