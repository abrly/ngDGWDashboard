import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Finechart1Component } from './finechart1.component';

describe('Finechart1Component', () => {
  let component: Finechart1Component;
  let fixture: ComponentFixture<Finechart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Finechart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Finechart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
