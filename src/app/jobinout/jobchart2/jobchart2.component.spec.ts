import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobchart2Component } from './jobchart2.component';

describe('Jobchart2Component', () => {
  let component: Jobchart2Component;
  let fixture: ComponentFixture<Jobchart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jobchart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jobchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
