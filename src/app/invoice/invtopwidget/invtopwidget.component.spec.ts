import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvtopwidgetComponent } from './invtopwidget.component';

describe('InvtopwidgetComponent', () => {
  let component: InvtopwidgetComponent;
  let fixture: ComponentFixture<InvtopwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvtopwidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvtopwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
