import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocomplete } from '@angular/material/autocomplete';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { ModalPersonRegisterComponent } from './modal-person-register.component';

describe('ModalPersonRegisterComponent', () => {
  let component: ModalPersonRegisterComponent;
  let fixture: ComponentFixture<ModalPersonRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalPersonRegisterComponent, MatAutocomplete],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPersonRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
