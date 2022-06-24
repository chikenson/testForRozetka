class Header {
    get root() {
     return $('rz-header');
    }
 
    get cartButton() {
     return this.root.$('rz-cart > button');
    }

    get cartButtonCounter(){
        return this.cartButton.$('[class*="counter "]');
    }
 }
 
 export default new Header();