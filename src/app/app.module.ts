import { NgModule } from '@angular/core';
//Importación del módulo 
import { HttpClientModule } from  '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavigationComponent } from '../components/navigation/navigation.component';
import { DataComponent } from './data/data.component';
import { SaluteMessageComponent } from '../components/salute-message/salute-message.component';
import { CardComponent } from '../components/card/card.component';
import { ContainerComponent } from '../components/container/container.component';
import { TopBarComponent } from '../components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DataComponent,
    SaluteMessageComponent,
    CardComponent,
    ContainerComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
