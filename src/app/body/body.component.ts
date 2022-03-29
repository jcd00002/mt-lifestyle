import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from 'src/body/product-item-model';
import { ProductService } from 'src/body/products.service';

@Component({
  selector: 'mt-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public ps: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(product: ProductItemModel){
    console.log("you clicked add product");
    console.log(product);
    this.ps.addProduct(product); 
  }

}
