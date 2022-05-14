import { UserModel } from './models/user-form.model';
import { CoinModel } from './models/coin.model';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { PlanModel } from './models/plan.model';
import { ServicePlanModel } from './models/service-plan.model';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-modal-person-register',
  templateUrl: './modal-person-register.component.html',
  styleUrls: ['./modal-person-register.component.css'],
})
export class ModalPersonRegisterComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  planList: PlanModel[] = [
    { id: 1, name: 'Basic' },
    { id: 2, name: 'Plus' },
    { id: 3, name: 'Advanced' },
  ];
  coinList: CoinModel[] = [
    { id: 1, simbol: '$' },
    { id: 2, simbol: '€' },
  ];

  options: ServicePlanModel[] = [
    { id: 1, name: 'Service 1' },
    { id: 2, name: 'Service 2' },
    { id: 3, name: 'Service 3' },
  ];

  filteredOptions?: Observable<ServicePlanModel[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserModel,
    private dialog: MatDialogRef<ModalPersonRegisterComponent>
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
    this.filteredOptions = this.formGroup.get('service')?.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    );
  }

  private _filter(value: string | ServicePlanModel): ServicePlanModel[] {
    value = typeof value === 'object' ? value.name : value;
    const filterValue = value?.toLowerCase();
    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  initFormGroup() {
    const formControls = {
      name: new FormControl(
        { value: this.data?.name, disabled: this.data ?? false },
        Validators.required
      ),
      plan: new FormControl(
        { value: this.data?.plan, disabled: this.data ?? false },
        Validators.required
      ),
      price: new FormControl(
        { value: this.data?.price, disabled: this.data ?? false },
        Validators.required
      ),
      coin: new FormControl(
        { value: this.data?.coin, disabled: this.data ?? false },
        Validators.required
      ),
      service: new FormControl(
        { value: this.data?.service, disabled: this.data ?? false },
        {
          validators: [this.autocompleteObjectValidator(), Validators.required],
        }
      ),
    };

    this.formGroup = new FormGroup(formControls);
  }

  autocompleteObjectValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (typeof control.value === 'string') {
        return { invalidAutocompleteObject: { value: control.value } };
      }
      return null;
    };
  }
  close() {
    this.dialog.close();
  }
  save() {
    this.dialog.close(this.formGroup.value);
  }

  compareObjectPlan = function (option: PlanModel, value: PlanModel): boolean {
    return option.id == value.id;
  };

  compareObjectCoin = function (option: CoinModel, value: CoinModel): boolean {
    return option.id == value.id;
  };

  displayFnService(option: ServicePlanModel): string {
    return option ? option.name : '';
  }
}
