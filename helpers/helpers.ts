export const normalizePrice = (strPrice: string): number => {
    let price = '';
    for (let i = 0;i < strPrice.length;i++) {
      if (strPrice[i].match(/[0-9]/)) {
        price = price + strPrice[i];
      }
    }
    return Number(price);
};