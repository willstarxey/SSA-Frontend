import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAvisosComponent } from './form-avisos.component';

describe('FormAvisosComponent', () => {
  let component: FormAvisosComponent;
  let fixture: ComponentFixture<FormAvisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAvisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
