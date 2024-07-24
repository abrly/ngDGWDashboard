import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurancechart2Component } from './insurancechart2.component';

describe('Insurancechart2Component', () => {
  let component: Insurancechart2Component;
  let fixture: ComponentFixture<Insurancechart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Insurancechart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Insurancechart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
