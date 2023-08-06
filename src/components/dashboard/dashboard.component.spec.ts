import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { SaluteMessageComponent } from 'src/components/salute-message/salute-message.component';

//Importe el módulo cliente para requerimientos http
import { HttpClientModule } from '@angular/common/http';

//Importe el servicio
import { ServiciosService } from 'src/app/providers/servicios.service';
import { CardComponent } from '../card/card.component';
import { ContainerComponent } from '../container/container.component';
import { GraphsComponent } from '../graphs/graphs.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //Registre el módulo de petición http
      imports: [ HttpClientModule ],

      //Registre el servicio como proveedor de datos
      providers: [ ServiciosService ],

      declarations: [DashboardComponent,SaluteMessageComponent,CardComponent,ContainerComponent,GraphsComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have salute message component',()=>{
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-salute-message')).not.toBe(null);
  })
  it('should have card component',()=>{
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-card')).not.toBe(null);
  })
  it('should have container component',()=>{
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-container')).not.toBe(null);
  })
  it('should have graphs component',()=>{
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-graphs')).not.toBe(null);
  })
  it('div',()=>{
    const divElement: HTMLElement = fixture.nativeElement;
    const div = divElement.querySelector('div')!;
    expect(div).toBeTruthy();
  })
  it('No p element', ()=> {
    const headerElement: HTMLElement = fixture.nativeElement;
    const nav = headerElement.querySelector('p')!;
    expect(nav).toBeFalsy();
  })
  
});
