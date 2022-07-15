import { Element, Profile } from "../../types";
import { MainPage } from "../main.page";
import { RegistationModal } from "./registration.modal";

export class LoginModal {
    private get registerButton(): Element {
        return $('button.auth-modal__register-link');
    }

    private get captcha(): Element {
        return $('[gtmlocation="signinPopup"]');
    }

    private get submitButton(): Element {
        return $('.button--large.button--green');
    }

    private get errorMessage(): Element {
        return $('.error-message');
    }

    private get loginInput(): Element {
        return $('#auth_email');
    }

    private get passwordInput(): Element {
        return $('#auth_pass');
    }

    async setLoginValue(value: string): Promise<LoginModal> {
        await this.loginInput.setValue(value);

        return this;
    }

    async setPasswordValue(value: string): Promise<LoginModal> {
        await this.passwordInput.setValue(value);

        return this;
    }

    getErrorMessageText(): Promise<string> {
        return this.errorMessage.getText();
    }

    async submitButtonClick(): Promise<MainPage> {
        await this.submitButton.click();

        return new MainPage();
    }

    async getCaptchaText(): Promise<string> {
        await this.captcha.waitForExist();

        return this.captcha.getText();
    }

    async registrationButtonClick(): Promise<RegistationModal> {
        await this.registerButton.click();

        return new RegistationModal();
    }

    async signIn({ mail,password }: Profile): Promise<MainPage> {
        await this.setLoginValue(mail);
        await this.setPasswordValue(password);
        await this.submitButtonClick();

        return new MainPage();
    }

}