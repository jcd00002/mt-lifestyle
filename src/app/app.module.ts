import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from 'src/body/cards.component';
import { HomeComponent } from 'src/body/home.component';
import { LowerCardsComponent } from 'src/body/lower.cards.component';



import { SecondNavBarComponent } from 'src/navigation/second.topnavbar.component';
import { TopNavBarComponent } from 'src/navigation/topnavbar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent,
    HomeComponent,
    CardsComponent,
    LowerCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
