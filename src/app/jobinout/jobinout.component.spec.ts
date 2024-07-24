import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobinoutComponent } from './jobinout.component';

describe('JobinoutComponent', () => {
  let component: JobinoutComponent;
  let fixture: ComponentFixture<JobinoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobinoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobinoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
