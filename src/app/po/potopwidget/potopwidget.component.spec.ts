import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotopwidgetComponent } from './potopwidget.component';

describe('PotopwidgetComponent', () => {
  let component: PotopwidgetComponent;
  let fixture: ComponentFixture<PotopwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotopwidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotopwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
