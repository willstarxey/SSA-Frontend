import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPagosComponent } from './form-pagos.component';

describe('FormPagosComponent', () => {
  let component: FormPagosComponent;
  let fixture: ComponentFixture<FormPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
