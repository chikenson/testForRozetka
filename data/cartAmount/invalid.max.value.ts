class MaxInvalidData {
    counterValue = 1000000;

    notification = (productName: string) => {
        return `Товар ${productName} отпускается в количестве не больше 999999 единиц`;
    };

}

export const maxInvalidData = new MaxInvalidData();