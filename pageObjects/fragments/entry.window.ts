import { Element } from "../../types";
import { RegistrationWindow } from "./registration.window";

export class EntryWindow {
    private get registerButton(): Element {
        return $('button.auth-modal__register-link');
    }

    async registrationButtonClick(): Promise<RegistrationWindow> {
        await this.registerButton.click();

        return new RegistrationWindow();
    }

}