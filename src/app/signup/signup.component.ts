import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../services/user.service';
import { GrowerFormComponent } from './grower-form/grower-form.component';
import { SharedFormComponent } from './shared-form/shared-form.component';
import { WarehouseEmployeeFormComponent } from './warehouse-employee-form/warehouse-employee-form.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public containerHeight: string = `${window.innerHeight - 100}px`;
  public typeControl: FormControl;
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.containerHeight = `${window.innerHeight - 100}px`;
    }
  @ViewChild('sharedForm') public sharedForm: SharedFormComponent;
  @ViewChild('growerForm') public growerForm: GrowerFormComponent;
  @ViewChild('warehouseForm') public warehouseForm: WarehouseEmployeeFormComponent;
  constructor(private ref: MatDialogRef<SignupComponent>, private userService: UserService) { }

  ngOnInit() {
    this.initSelectControl();
  }

  private initSelectControl() {
    this.typeControl = new FormControl(null);
  }

  private areFormsValid(): boolean {
    if (!this.typeControl.value) { this.typeControl.markAsTouched();  return false; }
    if (this.typeControl.value === 'Grower') {
      return this.sharedForm.formGroup.valid && this.growerForm.formGroup.valid;
    } else if (this.typeControl.value === 'Warehouse employee') {
      return this.sharedForm.formGroup.valid && this.warehouseForm.formGroup.valid;
    }
    return false;
  }

  completeSignUp() {
    if (this.areFormsValid()) {
      let specificForm = null;
      let typeUser = null;
      if (this.typeControl.value === 'Grower') {
        typeUser = 'grower';
        specificForm = this.growerForm.formGroup.getRawValue();
        specificForm.greenhouse_locations = specificForm.greenhouse_locations.join(', ');
      } else {
        typeUser = 'warehouse'
        specificForm = this.warehouseForm.formGroup.getRawValue();
      }
      this.userService.insertNewUser(typeUser, this.sharedForm.formGroup.getRawValue(), specificForm);

      this.ref.close();
    } else {
      this.sharedForm.showErrorsInForm();
      if (this.typeControl.value === 'Grower') {
        this.growerForm.showErrorsInForm();
      } else if (this.typeControl.value === 'Warehouse employee') {
        this.warehouseForm.showErrorsInForm();
      }
    }
  }

}
