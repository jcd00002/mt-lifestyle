import { Component } from '@angular/core';
import { mock_product_list } from 'src/body/mock_product_list';
import { ProductItemModel } from 'src/body/product-item-model';
import { FordProductItemModel } from 'src/body/ford-product-item-module';
import { ford_vehicles_product_list } from 'src/body/ford_vehicles_product_list';
import { GT500ProductItemModel } from 'src/body/GT500 Cards/gt500-product-item-module';
import { gt500_product_list } from 'src/body/GT500 Cards/gt500_product_item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mt-lifestyle';
 
  
}
