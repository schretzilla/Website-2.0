/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CivicEndevaorsComponent } from './civic-endevaors.component';

describe('CivicEndevaorsComponent', () => {
  let component: CivicEndevaorsComponent;
  let fixture: ComponentFixture<CivicEndevaorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivicEndevaorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivicEndevaorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
