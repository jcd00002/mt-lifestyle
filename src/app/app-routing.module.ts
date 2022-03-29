import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { MustangLifestyleMerchComponent } from 'src/body/mustang-merch-layout.component';
import { HomeLayoutComponent } from 'src/body/homelayout.component';
import { AccountComponent } from 'src/body/account-layout.component';
import { FordVehiclesComponent } from 'src/body/ford-vehicles-layout.component';
import { MustangComponent } from 'src/body/2020-gt500-layout.component';
import { BodyComponent } from './body/body.component';
const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'pages/mustang-lifestyle-merch', component: MustangLifestyleMerchComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'collections', component: FordVehiclesComponent},
  {path: 'collections/2020-gt500', component: MustangComponent},
  {path: 'account', component: AccountComponent},
  {path: 'admin', component: BodyComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    [RouterModule.forRoot(routes)]
  ],

  exports: [ 
    RouterModule
  ]
})
export class AppRoutingModule { }
