import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonRegisterComponent } from './person-register/person-register.component';
import { GridPersonComponent } from './person-register/grid-person/grid-person.component';
import { ModalPersonRegisterComponent } from './person-register/modal-person-register/modal-person-register.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    PersonRegisterComponent,
    GridPersonComponent,
    ModalPersonRegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    CurrencyMaskModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  exports:[
    PersonRegisterComponent,
    ModalPersonRegisterComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
