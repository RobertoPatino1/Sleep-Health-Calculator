import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataComponent } from './data.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from '../../app/providers/servicios.service';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataComponent],
      //Registre el módulo de petición http
      imports:[HttpClientModule],
      //Registre el servicio como proveedor de datos
      providers:[ServiciosService]

    });
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should request service user after Angular calls ngOnInit', (done: DoneFn) => {
    // Llame a ngOnInit para simular el ciclo de vida del componente
    component.ngOnInit();

    // Utilice fixture.whenStable para esperar a que se resuelva el observable del servicio
    fixture.whenStable().then(() => {
      
      // Valide que la respuesta sea mayor que 0
      expect(component.data.length).toBeGreaterThan(0)
      // Que espere hasta que llegue la respuesta
      done();

    });
  });

  it('should contain a specific HTML tag', () => {
    const element = fixture.nativeElement.querySelector("table#BMI_table")
    expect(element).toBeTruthy();
  });
});