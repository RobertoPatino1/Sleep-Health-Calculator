import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

import { FormsModule } from '@angular/forms';



describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //Registre el módulo de petición http
      imports: [FormsModule ],

      //Registre el servicio como proveedor de datos
      providers: [ ],

      declarations: [CalculadoraComponent]
    });
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
  });
  it('form element', ()=> {
    const formElement: HTMLElement = fixture.nativeElement;
    const form = formElement.querySelector('form')!;
    expect(form).toBeTruthy();
  })
  it('No p element', ()=> {
    const headerElement: HTMLElement = fixture.nativeElement;
    const nav = headerElement.querySelector('p')!;
    expect(nav).toBeFalsy();
  })

});
