import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOfProductDialogComponent } from './partofproduct-dialog.component';

describe('PartOfProductDialogComponent', () => {
  let component: PartOfProductDialogComponent;
  let fixture: ComponentFixture<PartOfProductDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOfProductDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOfProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
