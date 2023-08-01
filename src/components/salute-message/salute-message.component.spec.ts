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
});
