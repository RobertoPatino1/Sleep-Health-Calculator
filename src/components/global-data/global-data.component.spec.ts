import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDataComponent } from './global-data.component';
import { ContainerComponent } from '../container/container.component';
import { DataComponent } from '../data/data.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[],
      declarations: [GlobalDataComponent,ContainerComponent,DataComponent],
    }).compileComponents();
  })
  it('should create the Current component', () => {
    const fixture = TestBed.createComponent(GlobalDataComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it('should have the container component',() =>{
    const fixture = TestBed.createComponent(GlobalDataComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-container')).not.toBe(null);
    
  })


});
