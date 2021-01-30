import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalPlanDialogComponent } from './OperationalPlan-dialog.component';

describe('OperationalPlanDialogComponent', () => {
  let component: OperationalPlanDialogComponent;
  let fixture: ComponentFixture<OperationalPlanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalPlanDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalPlanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
