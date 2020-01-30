import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsdescComponent } from './modalsdesc.component';

describe('ModalsdescComponent', () => {
  let component: ModalsdescComponent;
  let fixture: ComponentFixture<ModalsdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
