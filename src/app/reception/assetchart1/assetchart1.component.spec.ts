import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assetchart1Component } from './assetchart1.component';

describe('Assetchart1Component', () => {
  let component: Assetchart1Component;
  let fixture: ComponentFixture<Assetchart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assetchart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assetchart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
