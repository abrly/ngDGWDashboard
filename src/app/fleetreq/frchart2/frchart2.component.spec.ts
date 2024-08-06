import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frchart2Component } from './frchart2.component';

describe('Frchart2Component', () => {
  let component: Frchart2Component;
  let fixture: ComponentFixture<Frchart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frchart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
