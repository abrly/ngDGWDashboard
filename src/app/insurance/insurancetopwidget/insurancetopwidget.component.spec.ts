import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancetopwidgetComponent } from './insurancetopwidget.component';

describe('InsurancetopwidgetComponent', () => {
  let component: InsurancetopwidgetComponent;
  let fixture: ComponentFixture<InsurancetopwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsurancetopwidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancetopwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
