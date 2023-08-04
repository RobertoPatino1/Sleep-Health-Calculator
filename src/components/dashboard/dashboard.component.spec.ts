import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

//Importe el módulo cliente para requerimientos http
import { HttpClientModule } from '@angular/common/http';

//Importe el servicio
import { ServiciosService } from 'src/app/providers/servicios.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //Registre el módulo de petición http
      imports: [ HttpClientModule ],

      //Registre el servicio como proveedor de datos
      providers: [ ServiciosService ],

      declarations: [DashboardComponent]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
