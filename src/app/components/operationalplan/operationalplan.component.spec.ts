import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalPlanComponent } from './operationalplan.component';

describe('OperationalPlanComponent', () => {
  let component: OperationalPlanComponent;
  let fixture: ComponentFixture<OperationalPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
