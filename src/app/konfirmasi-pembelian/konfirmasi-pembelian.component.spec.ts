/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KonfirmasiPembelianComponent } from './konfirmasi-pembelian.component';

describe('KonfirmasiPembelianComponent', () => {
  let component: KonfirmasiPembelianComponent;
  let fixture: ComponentFixture<KonfirmasiPembelianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonfirmasiPembelianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonfirmasiPembelianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
