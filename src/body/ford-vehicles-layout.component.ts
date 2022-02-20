import {Input, Component } from "@angular/core";
import { ford_vehicles_product_list } from "./ford_vehicles_product_list";
import { FordProductItemModel } from "./ford-product-item-module";
@Component({
    selector: 'mt-ford-vehicles', 
    templateUrl: 'ford-vehicles-layout.component.html', 
    styleUrls: ['ford-vehicles-layout.component.css']
})

export class FordVehiclesComponent { 
        products: FordProductItemModel [] = []; 
    
        constructor(){
          for(var product of ford_vehicles_product_list){
              this.products.push(product); 
        }
      }
        
    }