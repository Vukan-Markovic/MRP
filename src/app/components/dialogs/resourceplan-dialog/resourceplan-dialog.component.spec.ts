import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePlanDialogComponent } from './ResourcePlan-dialog.component';

describe('ResourcePlanDialogComponent', () => {
  let component: ResourcePlanDialogComponent;
  let fixture: ComponentFixture<ResourcePlanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcePlanDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcePlanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
