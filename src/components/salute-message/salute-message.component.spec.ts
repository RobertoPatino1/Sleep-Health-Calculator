import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaluteMessageComponent } from './salute-message.component';

describe('SaluteMessageComponent', () => {
  let component: SaluteMessageComponent;
  let fixture: ComponentFixture<SaluteMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaluteMessageComponent]
    });
    fixture = TestBed.createComponent(SaluteMessageComponent);
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
    const p = headerElement.querySelector('p')!;
    expect(p).toBeFalsy();
  })
});
