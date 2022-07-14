export const data = {

    maxCounterValue: 1000000,

    maxNotification: (productName: string) => {
        return `Товар ${productName} отпускается в количестве не больше 999999 единиц`;
    },

    minCounterValue: 0,

    minNotification: (productName: string) => {
      return `Товар ${productName} отпускается в количестве не меньше 1 единицы`;
    },

    counterValidValue: 5,

    productAmount: 1,

    productName: "Acer",
};