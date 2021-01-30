import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialWarehouseComponent } from './materialwarehouse.component';

describe('MaterialWarehouseComponent', () => {
  let component: MaterialWarehouseComponent;
  let fixture: ComponentFixture<MaterialWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
