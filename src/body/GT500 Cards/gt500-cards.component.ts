import { Component,Input } from "@angular/core";

@Component({
    selector: 'mt-gt500-cards',
    templateUrl: "gt500-cards.component.html", 
    styleUrls: ['gt500-cards.component.css']
})
export class Gt500CardsComponent{
  
    @Input() img: string; 
    @Input() description: string; 
    @Input() price: number; 
 
     constructor(){
         this.img = "./assets/card 4.jpg";
         this.description = "ML"; 
         this.price = 15; 
     }
        

    
}