import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./shared-form.component.scss']
})
export class SharedFormComponent implements OnInit {
  public formGroup: FormGroup;
  public numberPattern = { 0: { pattern: new RegExp('[0-9]+') } };
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.formGroup = this.fb.group({
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      phone_number: [null, [Validators.required]]
    });
  }

  public showErrorsInForm() {
    for (const controlName of Object.keys(this.formGroup.controls)) {
      this.formGroup.get(controlName).markAsTouched();
    }
  }

}
