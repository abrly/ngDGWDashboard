import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurancechart4Component } from './insurancechart4.component';

describe('Insurancechart4Component', () => {
  let component: Insurancechart4Component;
  let fixture: ComponentFixture<Insurancechart4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Insurancechart4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Insurancechart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
