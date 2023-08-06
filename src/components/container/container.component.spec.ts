import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent]
    });
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
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
