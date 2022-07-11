import { Element } from "../../types";

export class VerifyWindow {
    private get verifyWindow(): Element {
        return $('rz-register-phone');
    }

    async displayedOfVerifyWindow(): Promise<boolean> {
        await this.verifyWindow.waitForExist();
        return await this.verifyWindow.isDisplayed();
    }

    private get verifyCodeInput(): Element {
        return $('#registerFormVerifyCode');
    }

    async displayedOfVerifyCodeInput(): Promise<boolean> {
        return await this.verifyCodeInput.isDisplayed();
    }
}