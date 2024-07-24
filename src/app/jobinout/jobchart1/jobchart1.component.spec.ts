import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobchart1Component } from './jobchart1.component';

describe('Jobchart1Component', () => {
  let component: Jobchart1Component;
  let fixture: ComponentFixture<Jobchart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jobchart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jobchart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
