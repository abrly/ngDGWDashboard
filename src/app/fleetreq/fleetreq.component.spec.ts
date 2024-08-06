import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetreqComponent } from './fleetreq.component';

describe('FleetreqComponent', () => {
  let component: FleetreqComponent;
  let fixture: ComponentFixture<FleetreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetreqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
