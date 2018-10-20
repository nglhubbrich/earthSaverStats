import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepViewPage } from './deep-view.page';

describe('DeepViewPage', () => {
  let component: DeepViewPage;
  let fixture: ComponentFixture<DeepViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
