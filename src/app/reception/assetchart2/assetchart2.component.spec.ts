import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assetchart2Component } from './assetchart2.component';

describe('Assetchart2Component', () => {
  let component: Assetchart2Component;
  let fixture: ComponentFixture<Assetchart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assetchart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assetchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
