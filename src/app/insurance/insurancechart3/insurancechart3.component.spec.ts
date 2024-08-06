import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurancechart3Component } from './insurancechart3.component';

describe('Insurancechart3Component', () => {
  let component: Insurancechart3Component;
  let fixture: ComponentFixture<Insurancechart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Insurancechart3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Insurancechart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
