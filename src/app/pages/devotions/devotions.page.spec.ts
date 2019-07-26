import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionsPage } from './devotions.page';

describe('DevotionsPage', () => {
  let component: DevotionsPage;
  let fixture: ComponentFixture<DevotionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevotionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevotionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
