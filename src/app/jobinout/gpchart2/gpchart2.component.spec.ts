import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gpchart2Component } from './gpchart2.component';

describe('Gpchart2Component', () => {
  let component: Gpchart2Component;
  let fixture: ComponentFixture<Gpchart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gpchart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gpchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
