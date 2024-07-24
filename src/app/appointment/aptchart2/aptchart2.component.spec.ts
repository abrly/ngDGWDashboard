import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aptchart2Component } from './aptchart2.component';

describe('Aptchart2Component', () => {
  let component: Aptchart2Component;
  let fixture: ComponentFixture<Aptchart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aptchart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aptchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
