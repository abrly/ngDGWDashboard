import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceChart1Component } from './insurance-chart1.component';

describe('InsuranceChart1Component', () => {
  let component: InsuranceChart1Component;
  let fixture: ComponentFixture<InsuranceChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceChart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
