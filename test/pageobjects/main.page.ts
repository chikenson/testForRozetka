import Page from './page';

class MainPage extends Page {
    get discountBlock() {
        return $("//*[text()[contains(.,'Акционные предложения')]]/../ul");
    }

    get discountBlockElement() {
        return this.discountBlock.$('//rz-goods-section/ul/li[1]');
    }

    get discountBlockElementTitle(){
        return this.discountBlockElement.$('//*[@class="tile__title"]');
    }

    get discountBlockElementPrice(){
        return this.discountBlockElement.$('//*[@class="tile__price-value"]');
    }
  
    open () {
        return super.open('');
    }
}

export default new MainPage();
