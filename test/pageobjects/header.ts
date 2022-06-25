import { Element } from '../types'

class Header {
    private get root(): Element {
      return $('rz-header');
    }
 
    private get cartButton(): Element {
      return this.root.$('rz-cart > button');
    }

    private get cartButtonCounter(): Element{
      return this.cartButton.$('[class*="counter "]');
    }

    cartButtonCounterValue(): Promise <string>{
      return this.cartButtonCounter.getText()
    }
 }
 
 export default new Header();