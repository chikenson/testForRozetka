class Helpers {

  normalizePrice = (strPrice: string): number => {
    let price = '';
      for (let i = 0;i < strPrice.length;i++) {
        if (strPrice[i].match(/[0-9]/)) {
          price = price + strPrice[i];
        }
      }
    return Number(price);
  };

  randomValue = (max: number, min: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  randomLatinString(stringLength, radix = 36) {
    return Math.random()
               .toString(radix)
               .replace(/[^A-z]+/g, '')
               .substr(0, stringLength);
  }

  randomNumber() {
    return Math.floor(Math.random() * (1111111111 - 1 + 1)) + 1;
  }

  randomMail(email='') {
    return this.randomLatinString(5) + email;
  }

  randomCyrillicString = (lenght) => {
    let i;
    let str ='';
    const possible = "ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁйцукенгшщзхъфывапролджэячсмитьбюё";

      for(i=0;i<=lenght;i++)
        str += possible.charAt(Math.floor(Math.random() * possible.length));

    return str;
  };

  randomPassword = (max, email='') => {
    let text = "";
    const possible = "QWERTYUIOPASDFGHJKLZXCVBNMabcdefghijklmnopqrstuvwxyz0123456789";

    for( let i=0; i < max; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text + email;
 };

}

export const helpers = new Helpers();