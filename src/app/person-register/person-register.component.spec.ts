import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { PersonRegisterComponent } from './person-register.component';

describe('PersonRegisterComponent', () => {
  let component: PersonRegisterComponent;
  let fixture: ComponentFixture<PersonRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
      ],
    });
    fixture = TestBed.createComponent(PersonRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
