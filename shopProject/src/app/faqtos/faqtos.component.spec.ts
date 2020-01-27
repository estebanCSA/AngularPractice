import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqtosComponent } from './faqtos.component';

describe('FaqtosComponent', () => {
  let component: FaqtosComponent;
  let fixture: ComponentFixture<FaqtosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqtosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqtosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
