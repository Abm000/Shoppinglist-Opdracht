import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'myProducts', component:ShoppingComponent},
  {path: '', pathMatch: "full", redirectTo:'login'},
  {path: '**', pathMatch: "full", redirectTo:'login'}
];

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
