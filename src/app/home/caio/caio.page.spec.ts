import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaioPage } from './caio.page';

describe('CaioPage', () => {
  let component: CaioPage;
  let fixture: ComponentFixture<CaioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
