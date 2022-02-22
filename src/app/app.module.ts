import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from 'src/body/cards.component';
import { HomeComponent } from 'src/body/home.component';
import { LowerCardsComponent } from 'src/body/lower.cards.component';



import { SecondNavBarComponent } from 'src/navigation/second.topnavbar.component';
import { TopNavBarComponent } from 'src/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MustangLifestyleMerchComponent } from 'src/body/mustang-merch-layout.component';
import { HomeLayoutComponent } from 'src/body/homelayout.component';
import { AccountComponent } from 'src/body/account-layout.component';
import { FordVehiclesComponent } from 'src/body/ford-vehicles-layout.component';
import { MustangComponent } from 'src/body/2020-gt500-layout.component';
import { FordCardsComponent } from 'src/body/fordcards.component';
import { FooterComponent } from 'src/navigation/footer.component';
import { HeaderComponent } from 'src/shelby/header.component';
import { MlMerchComponent } from 'src/ml merch/ml.merch.cards.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent,
    HomeComponent,
    CardsComponent,
    LowerCardsComponent,
    MustangLifestyleMerchComponent,
    HomeLayoutComponent,
    FordVehiclesComponent, 
    MustangComponent, 
    AccountComponent,
    FordCardsComponent,
    FooterComponent,
    HeaderComponent,
    MlMerchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
