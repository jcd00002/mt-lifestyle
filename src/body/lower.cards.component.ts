import { Component, Input } from "@angular/core";

@Component({
    selector: 'mt-lower-cards',
    templateUrl: "lower.cards.component.html", 
    styleUrls: ['lower.cards.component.css']
})
export class LowerCardsComponent{
   @Input() img: string; 
   @Input() description: string; 
   @Input() price: number; 

    constructor(){
        this.img = "./assets/card 4.jpg";
        this.description = "ML"; 
        this.price = 15; 
    }
       

    
}