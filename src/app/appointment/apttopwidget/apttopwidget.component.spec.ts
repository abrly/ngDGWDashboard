import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApttopwidgetComponent } from './apttopwidget.component';

describe('ApttopwidgetComponent', () => {
  let component: ApttopwidgetComponent;
  let fixture: ComponentFixture<ApttopwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApttopwidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApttopwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
