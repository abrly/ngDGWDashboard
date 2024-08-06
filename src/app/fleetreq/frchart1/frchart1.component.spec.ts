import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frchart1Component } from './frchart1.component';

describe('Frchart1Component', () => {
  let component: Frchart1Component;
  let fixture: ComponentFixture<Frchart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frchart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frchart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
