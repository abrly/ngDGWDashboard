import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobtopwidgetComponent } from './jobtopwidget.component';

describe('JobtopwidgetComponent', () => {
  let component: JobtopwidgetComponent;
  let fixture: ComponentFixture<JobtopwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobtopwidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobtopwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
