import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { GridPersonComponent } from './grid-person.component';

describe('GridPersonComponent', () => {
  let component: GridPersonComponent;
  let fixture: ComponentFixture<GridPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridPersonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
    });
    fixture = TestBed.createComponent(GridPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
