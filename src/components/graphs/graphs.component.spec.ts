import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsComponent } from './graphs.component';

describe('GraphsComponent', () => {
  let component: GraphsComponent;
  let fixture: ComponentFixture<GraphsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphsComponent]
    });
    fixture = TestBed.createComponent(GraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('canvas',()=>{
    const canvasElement: HTMLElement = fixture.nativeElement;
    const canvas = canvasElement.querySelector('canvas')!;
    expect(canvas).toBeTruthy();
  })
  it('No p element', ()=> {
    const headerElement: HTMLElement = fixture.nativeElement;
    const nav = headerElement.querySelector('p')!;
    expect(nav).toBeFalsy();
  })
});
