import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pochart1Component } from './pochart1.component';

describe('Pochart1Component', () => {
  let component: Pochart1Component;
  let fixture: ComponentFixture<Pochart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pochart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pochart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
