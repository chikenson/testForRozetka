import { randomValue } from "../helpers/helpers";

export const oneProduct = 1;

export const counterMillionValue = 1000000;

export const counterZeroValue = 0;

export const searchValue = "Samsung";

export const counterRandomValue = randomValue(9, 2);

export const zeroAmountNotification = (productName) => {
    return `Товар ${productName} отпускается в количестве не меньше 1 единицы`;
};

export const millionAmountNotification = (productName) => {
    return `Товар ${productName} отпускается в количестве не больше 999999 единиц`;
};