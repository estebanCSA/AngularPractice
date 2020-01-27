import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMiceComponent } from './product-mice.component';

describe('ProductMiceComponent', () => {
  let component: ProductMiceComponent;
  let fixture: ComponentFixture<ProductMiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
