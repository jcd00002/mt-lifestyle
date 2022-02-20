import { Component, Input } from "@angular/core";

@Component({
    selector: 'mt-ford-cards',
    templateUrl: "fordcards.component.html", 
    styleUrls: ['fordcards.component.css']
})
export class FordCardsComponent{
   @Input() img: string; 
   @Input() description: string; 


    constructor(){
        this.img = "./assets/card 4.jpg";
        this.description = "ML"; 

    }
}