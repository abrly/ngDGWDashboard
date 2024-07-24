import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aptchart1Component } from './aptchart1.component';

describe('Aptchart1Component', () => {
  let component: Aptchart1Component;
  let fixture: ComponentFixture<Aptchart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aptchart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aptchart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
