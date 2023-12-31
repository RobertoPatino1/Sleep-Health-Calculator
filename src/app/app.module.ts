import { NgModule } from '@angular/core';
//Importación del módulo 
import { HttpClientModule } from  '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from '../components/navigation/navigation.component';
import { DataComponent } from '../components/data/data.component';
import { SaluteMessageComponent } from '../components/salute-message/salute-message.component';
import { CardComponent } from '../components/card/card.component';
import { ContainerComponent } from '../components/container/container.component';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { GraphsComponent } from '../components/graphs/graphs.component';
import { CalculadoraComponent } from '../components/calculadora/calculadora.component';

 
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { GlobalDataComponent } from '../components/global-data/global-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DataComponent,
    SaluteMessageComponent,
    CardComponent,
    ContainerComponent,
    TopBarComponent,
    DashboardComponent,
    GraphsComponent,
    CalculadoraComponent,
    CalculadoraComponent,
    GlobalDataComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, CanvasJSAngularChartsModule, FormsModule
  ],
  exports:[ContainerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
