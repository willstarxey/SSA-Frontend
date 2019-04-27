import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAvisosComponent } from './index-avisos.component';

describe('IndexAvisosComponent', () => {
  let component: IndexAvisosComponent;
  let fixture: ComponentFixture<IndexAvisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAvisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
