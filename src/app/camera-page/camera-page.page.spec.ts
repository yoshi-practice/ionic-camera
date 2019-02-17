import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraPagePage } from './camera-page.page';

describe('CameraPagePage', () => {
  let component: CameraPagePage;
  let fixture: ComponentFixture<CameraPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
