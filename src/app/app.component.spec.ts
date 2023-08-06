import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculadoraComponent } from 'src/components/calculadora/calculadora.component';
import { CardComponent } from 'src/components/card/card.component';
import { ContainerComponent } from 'src/components/container/container.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { DataComponent } from 'src/components/data/data.component';
import { GlobalDataComponent } from 'src/components/global-data/global-data.component';
import { GraphsComponent } from 'src/components/graphs/graphs.component';
import { NavigationComponent } from 'src/components/navigation/navigation.component';
import { SaluteMessageComponent } from 'src/components/salute-message/salute-message.component';
import { TopBarComponent } from 'src/components/top-bar/top-bar.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [AppComponent,CalculadoraComponent,CardComponent,ContainerComponent,
        DashboardComponent,DataComponent,GlobalDataComponent,GraphsComponent,NavigationComponent,
        SaluteMessageComponent,TopBarComponent
      ],
    }).compileComponents();
  })
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });




});
