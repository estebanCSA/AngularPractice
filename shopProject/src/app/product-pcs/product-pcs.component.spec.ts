import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPCsComponent } from './product-pcs.component';

describe('ProductPCsComponent', () => {
  let component: ProductPCsComponent;
  let fixture: ComponentFixture<ProductPCsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPCsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
