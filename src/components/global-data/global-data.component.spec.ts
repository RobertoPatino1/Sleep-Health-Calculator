import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from '../../app/providers/servicios.service';

import { GlobalDataComponent } from './global-data.component';
import { ContainerComponent } from '../container/container.component';
import { DataComponent } from '../data/data.component';

describe('GlobalDataComponent', () => {
  let component: GlobalDataComponent;
  let fixture: ComponentFixture<GlobalDataComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [GlobalDataComponent,ContainerComponent,DataComponent],
      providers:[ServiciosService]
    }).compileComponents();
    fixture = TestBed.createComponent(GlobalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have container  component',()=>{
    const fixture = TestBed.createComponent(GlobalDataComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-container')).not.toBe(null);
  })
  it('should have data  component',()=>{
    const fixture = TestBed.createComponent(GlobalDataComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-data')).not.toBe(null);
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
