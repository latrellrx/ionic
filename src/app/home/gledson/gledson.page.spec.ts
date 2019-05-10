import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GledsonPage } from './gledson.page';

describe('GledsonPage', () => {
  let component: GledsonPage;
  let fixture: ComponentFixture<GledsonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GledsonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GledsonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
