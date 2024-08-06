import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gpchart1Component } from './gpchart1.component';

describe('Gpchart1Component', () => {
  let component: Gpchart1Component;
  let fixture: ComponentFixture<Gpchart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gpchart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gpchart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
