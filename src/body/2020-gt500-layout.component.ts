import { Input,Component } from "@angular/core";
import { gt500_product_list } from "./GT500 Cards/gt500_product_item";
import { GT500ProductItemModel } from "./GT500 Cards/gt500-product-item-module";



@Component({
    selector: 'mt-2020-gt500', 
    templateUrl: '2020-gt500-layout.component.html', 
    styleUrls: ['2020-gt500-layout.component.css']
})

export class MustangComponent {

    products: GT500ProductItemModel [] = []; 
    
    constructor(){
      for(var product of gt500_product_list){
          this.products.push(product); 
    }
  }
    
}

