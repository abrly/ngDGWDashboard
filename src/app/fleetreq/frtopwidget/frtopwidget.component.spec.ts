import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrtopwidgetComponent } from './frtopwidget.component';

describe('FrtopwidgetComponent', () => {
  let component: FrtopwidgetComponent;
  let fixture: ComponentFixture<FrtopwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrtopwidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrtopwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
