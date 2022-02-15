import { Component } from "@angular/core";
import { mock_product_list } from "./mock_product_list";
import { ProductItemModel } from "./product-item-model";

@Component({
    selector: 'mt-homelayout',
    templateUrl: 'homelayout.component.html', 
    styleUrls: ['homelayout.component.css']
})
export class HomeLayoutComponent{ 
    products: ProductItemModel [] = []; 

    constructor(){
      for(var product of mock_product_list){
          this.products.push(product); 
    }
  }
}