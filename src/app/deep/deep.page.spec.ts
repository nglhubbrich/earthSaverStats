import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepPage } from './deep.page';

describe('DeepPage', () => {
  let component: DeepPage;
  let fixture: ComponentFixture<DeepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
