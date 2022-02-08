export class ProductItemModel{
    img: string;
    description: string;
    price: number; 

    constructor(img: string,
        description: string,
        price: number){

            this.img = img;
            this.description = description;
            this.price = price; 
    }
}
