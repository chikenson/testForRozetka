import { Element } from '../types'

class Header {
    get root(): Element {
     return $('rz-header');
    }
 
    get cartButton(): Element {
     return this.root.$('rz-cart > button');
    }

    get cartButtonCounter(): Element{
        return this.cartButton.$('[class*="counter "]');
    }
 }
 
 export default new Header();