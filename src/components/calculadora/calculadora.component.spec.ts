import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

//Importe el módulo cliente para requerimientos http
import { HttpClientModule } from '@angular/common/http';

//Importe el servicio
import { ServiciosService } from 'src/app/providers/servicios.service';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //Registre el módulo de petición http
      imports: [ HttpClientModule ],

      //Registre el servicio como proveedor de datos
      providers: [ ServiciosService ],

      declarations: [CalculadoraComponent]
    });
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
  });

});
