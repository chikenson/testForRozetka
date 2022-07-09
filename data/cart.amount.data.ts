export const addOneProduct = 1;

export const counterIsMillion = 1000000;

export const counterIsZero = 0;

export const validSearchValue = "Samsung";

export const counterIsRandomValid = (): number => {
    return Math.floor(Math.random() * 7 + 2);
 };

export const zeroAmountNotification = (productName) => {
    return `Товар ${productName} отпускается в количестве не меньше 1 единицы`;
};

export const millionAmountNotification = (productName) => {
    return `Товар ${productName} отпускается в количестве не больше 999999 единиц`;
};