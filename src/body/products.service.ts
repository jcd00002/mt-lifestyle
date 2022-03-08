import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item-model";

@Injectable({
    providedIn: 'root'
})
export class ProductService{ 
    private baseUrl: string = "https://mustang-lifestyle-default-rtdb.firebaseio.com/";
    private productsEndpoint: string = "products.json";

    constructor(private http: HttpClient){

    }

    public getProducts(){
        return this.http.get<ProductItemModel []>(this.baseUrl + this.productsEndpoint); 
    }

    public getProduct(index: number){
        return this.http.get<ProductItemModel>(this.baseUrl + 'products/' + index + '.json')
    }
}