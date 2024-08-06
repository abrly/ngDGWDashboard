import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invchart1Component } from './invchart1.component';

describe('Invchart1Component', () => {
  let component: Invchart1Component;
  let fixture: ComponentFixture<Invchart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Invchart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invchart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
