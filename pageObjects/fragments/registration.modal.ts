import { Element, Profile } from "../../types";
import { VerifyWindow } from "./verify.window";

export class RegistationModal {

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
        return this.validationMessages.map((item) => item.getText());
    }

    async setNameInput(name: string): Promise<RegistationModal> {
        await this.nameInput.setValue(name);

        return this;
    }

    async setSurNameInput(surName: string): Promise<RegistationModal> {
        await this.surNameInput.setValue(surName);

        return this;
    }

    async setPhoneInput(phone: number): Promise<RegistationModal> {
        await this.phoneInput.setValue(phone);

        return this;
    }

    async setMailInput(mail: string): Promise<RegistationModal> {
        await this.mailInput.setValue(mail);

        return this;
    }

    async setPasswordInput(value: string): Promise<RegistationModal> {
        await this.passwordInput.setValue(value);

        return this;
    }

    async submitButtonClick(): Promise<VerifyWindow> {
        await this.submitButton.waitForClickable();
        await this.submitButton.click();

        return new VerifyWindow();
    }

    async register({ name,surName,phone,mail,password }: Profile): Promise<VerifyWindow> {
        await this.setNameInput(name);
        await this.setSurNameInput(surName);
        await this.setPhoneInput(phone);
        await this.setMailInput(mail);
        await this.setPasswordInput(password);
        await this.submitButtonClick();

        return new VerifyWindow();
    }

}