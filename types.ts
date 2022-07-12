export type Element = ReturnType<WebdriverIO.Browser['$']>;

export type ElementArray = ReturnType<WebdriverIO.Browser['$$']>;

export interface Profile {
    name?: string,
    surName?: string,
    phone?: number,
    mail: string,
    password: string
}