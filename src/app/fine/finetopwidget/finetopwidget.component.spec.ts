import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinetopwidgetComponent } from './finetopwidget.component';

describe('FinetopwidgetComponent', () => {
  let component: FinetopwidgetComponent;
  let fixture: ComponentFixture<FinetopwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinetopwidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinetopwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
