class MinInvalidData {
    counterValue = 0;

    notification = (productName: string) => {
      return `Товар ${productName} отпускается в количестве не меньше 1 единицы`;
    };

}

export const minInvalidData = new MinInvalidData();