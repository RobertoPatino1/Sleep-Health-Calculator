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
import { FormsModule } from '@angular/forms';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule, FormsModule],
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


  it('should have the topbar component',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-top-bar')).not.toBe(null);
  })
  it('should have the dashboard component',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-dashboard')).not.toBe(null);
  })
  it('should have the calculator component',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-calculadora')).not.toBe(null);
  })
  it('should have the global data component',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-global-data')).not.toBe(null);
  })
  



});
