import { ModalPersonRegisterComponent } from './../modal-person-register/modal-person-register.component';
import { UserModel } from './../modal-person-register/models/user-form.model';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-grid-person',
  templateUrl: './grid-person.component.html',
  styleUrls: ['./grid-person.component.css'],
})
export class GridPersonComponent implements OnInit, OnChanges {
  @Input() userList: UserModel[] = [];
  data: UserModel[] = [];
  displayedColumns: string[] = ['name', 'plan', 'price', 'coin', 'service'];

  constructor(private dialog:MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.data = this.userList;
  }

  openForm(row:UserModel){
    const dialog = this.dialog.open(ModalPersonRegisterComponent,{
      data:row
    })

    dialog.afterClosed().subscribe((result: UserModel) => {
      if (result) {
        let newList = [...this.data];
        newList.push(result);
        this.data = [...newList];
      }
    });
  }
}
