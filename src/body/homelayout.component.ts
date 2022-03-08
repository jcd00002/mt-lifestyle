import { Component, OnInit } from "@angular/core";
import { mock_product_list } from "./mock_product_list";
import { ProductItemModel } from "./product-item-model";
import { ProductService } from "./products.service";

@Component({
    selector: 'mt-homelayout',
    templateUrl: 'homelayout.component.html', 
    styleUrls: ['homelayout.component.css']
})
export class HomeLayoutComponent implements OnInit{ 
    products: ProductItemModel [] = []; 

    constructor(private productsService: ProductService){
     
  }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      console.log("fetching product data"); 
      for( var product of data){
        console.log(product);
        this.products.push(product); 
      }
    })
  }
}