import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFestividadesComponent } from './index-festividades.component';

describe('IndexFestividadesComponent', () => {
  let component: IndexFestividadesComponent;
  let fixture: ComponentFixture<IndexFestividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexFestividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFestividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
