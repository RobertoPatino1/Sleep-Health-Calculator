import { TestBed } from '@angular/core/testing';

//Importe el servicio
import { ServiciosService } from './servicios.service';

//Importe el módulo cliente para requerimientos http
import { HttpClientModule } from '@angular/common/http';


//Importe la interfaz
import { Plantillas } from '../interfaces/plantillas';


describe('ServiciosService', () => {

  let service: ServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ ServiciosService ]
    });
    service = TestBed.inject(ServiciosService);
  });

   // La función done se encarga de esperar por completar el requerimiento
   it('getResponse should return value from observable', (done: DoneFn) => {
    //Invoque el método con la petición asincrónica
    service.getResponse().subscribe(data => {
      
      // Valide que la respuesta sea mayor que 0
      expect((data as Plantillas[]).length).toBeGreaterThan(0)
      
      // Que espere hasta que llegue la respuesta 
      done();
    });
  });
});
