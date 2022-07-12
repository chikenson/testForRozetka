import { Element } from "../../types";

export class VerifyWindow {
    private get verifyWindow(): Element {
        return $('rz-register-phone');
    }

    private get verifyCodeInput(): Element {
        return $('#registerFormVerifyCode');
    }

    async displayedOfVerifyWindow(): Promise<boolean> {
        await this.verifyWindow.waitForExist();

        return this.verifyWindow.isDisplayed();
    }

    displayedOfVerifyCodeInput(): Promise<boolean> {
        return this.verifyCodeInput.isDisplayed();
    }
}