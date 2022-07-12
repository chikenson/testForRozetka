class ValidData {
    profile = {
        mail: process.env.USERNAME,
        password: process.env.PASSWORD,
    };

    captchaMessage = "Необходимо подтвердить, что вы не робот";
}

export const validData = new ValidData();