import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataComponent } from './data.component';
describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataComponent]
    });
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain a specific HTML tag', () => {
    const element = fixture.nativeElement.querySelector("table#BMI_table")
    expect(element).toBeTruthy();
  });
});