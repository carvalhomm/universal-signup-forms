import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-warehouse-employee-form',
  templateUrl: './warehouse-employee-form.component.html',
  styleUrls: ['./warehouse-employee-form.component.scss']
})
export class WarehouseEmployeeFormComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initFormGroup();
  }

  public showErrorsInForm() {
    for (const controlName of Object.keys(this.formGroup.controls)) {
      this.formGroup.get(controlName).markAsTouched();
    }
  }

  private initFormGroup() {
    this.formGroup = this.fb.group({
      years_of_experience: [null, [Validators.required]],
      educational_qualification: [null, [Validators.required]],
      inventory_management_certification: [null, [Validators.required]]
    });
  }

}
