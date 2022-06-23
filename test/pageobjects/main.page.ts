import Page from './page';

class MainPage extends Page {
     get discountBoxElement() {
        return $('//section[1]/rz-goods-section/ul/li[1]');
    }
  
     open () {
        return super.open('');
    }
}

export default new MainPage();
