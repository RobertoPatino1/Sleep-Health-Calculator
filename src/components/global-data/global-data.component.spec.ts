import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDataComponent } from './global-data.component';

describe('GlobalDataComponent', () => {
  let component: GlobalDataComponent;
  let fixture: ComponentFixture<GlobalDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalDataComponent]
    });
    fixture = TestBed.createComponent(GlobalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
