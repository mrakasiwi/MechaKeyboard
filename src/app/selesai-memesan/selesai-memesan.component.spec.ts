/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelesaiMemesanComponent } from './selesai-memesan.component';

describe('SelesaiMemesanComponent', () => {
  let component: SelesaiMemesanComponent;
  let fixture: ComponentFixture<SelesaiMemesanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelesaiMemesanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelesaiMemesanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
