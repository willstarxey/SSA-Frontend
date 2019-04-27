import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPagosComponent } from './index-pagos.component';

describe('IndexPagosComponent', () => {
  let component: IndexPagosComponent;
  let fixture: ComponentFixture<IndexPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
