import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Finechart2Component } from './finechart2.component';

describe('Finechart2Component', () => {
  let component: Finechart2Component;
  let fixture: ComponentFixture<Finechart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Finechart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Finechart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
