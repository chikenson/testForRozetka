export const data = {

    maxCounterValue: 1000000,

    maxNotification: (productName: string) => {
        return `Товар ${productName} відпускається у кількості не більше 999999 одиниць`;
    },

    minCounterValue: 0,

    minNotification: (productName: string) => {
      return `Товар ${productName} відпускається у кількості не менше 1 одиниці`;
    },

    counterValidValue: 5,

    productAmount: 1,

    productName: "Acer",
};