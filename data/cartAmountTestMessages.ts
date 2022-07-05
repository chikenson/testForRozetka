 export const zeroAmountNotification = (productName) => {
    return `Товар ${productName} отпускается в количестве не меньше 1 единицы`;
};

export const millionAmountNotification = (productName) => {
    return `Товар ${productName} отпускается в количестве не больше 999999 единиц`;
};