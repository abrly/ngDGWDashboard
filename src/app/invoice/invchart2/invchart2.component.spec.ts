import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invchart2Component } from './invchart2.component';

describe('Invchart2Component', () => {
  let component: Invchart2Component;
  let fixture: ComponentFixture<Invchart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Invchart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
