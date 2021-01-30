import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOfProductComponent } from './partofproduct.component';

describe('PartOfProductComponent', () => {
  let component: PartOfProductComponent;
  let fixture: ComponentFixture<PartOfProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOfProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOfProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
