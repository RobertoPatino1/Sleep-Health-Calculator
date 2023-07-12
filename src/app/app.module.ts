import { NgModule } from '@angular/core';
//Importación del módulo 
import { HttpClientModule } from  '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
