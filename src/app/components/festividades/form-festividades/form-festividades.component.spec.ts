import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFestividadesComponent } from './form-festividades.component';

describe('FormFestividadesComponent', () => {
  let component: FormFestividadesComponent;
  let fixture: ComponentFixture<FormFestividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFestividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFestividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
