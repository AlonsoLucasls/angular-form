import { UserModel } from './modal-person-register/models/user-form.model';
import { ModalPersonRegisterComponent } from './modal-person-register/modal-person-register.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-person-register',
  templateUrl: './person-register.component.html',
  styleUrls: ['./person-register.component.css'],
})
export class PersonRegisterComponent implements OnInit {
  userListRegistered: UserModel[] = [];
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}
  openModal() {
    const dialog = this.matDialog.open(ModalPersonRegisterComponent, {
      width: '500px',
    });
    dialog.afterClosed().subscribe((result: UserModel) => {
      if (result) {
        let newList = [...this.userListRegistered];
        newList.push(result);
        this.userListRegistered = [...newList];
      }
    });
  }
}
