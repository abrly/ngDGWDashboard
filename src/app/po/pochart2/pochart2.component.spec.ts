import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pochart2Component } from './pochart2.component';

describe('Pochart2Component', () => {
  let component: Pochart2Component;
  let fixture: ComponentFixture<Pochart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pochart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pochart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
