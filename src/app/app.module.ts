import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    //Se creo el componente HeroesComponent y debe declararse en este modulo o en el que corresponda
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Importe FormsModule para utilizar ngModel en input de formularios
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
