import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent]
    });
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('nav',()=>{
    const navElement: HTMLElement = fixture.nativeElement;
    const nav = navElement.querySelector('nav')!;
    expect(nav).toBeTruthy();
  })
  it('No p element', ()=> {
    const headerElement: HTMLElement = fixture.nativeElement;
    const p = headerElement.querySelector('p')!;
    expect(p).toBeFalsy();
  })
});
