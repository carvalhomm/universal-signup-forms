import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grower-form',
  templateUrl: './grower-form.component.html',
  styleUrls: ['./grower-form.component.scss']
})
export class GrowerFormComponent implements OnInit {
  public formGroup: FormGroup;
  public greenhouseLocations = [
    'Toronto',
    'São Paulo',
    'Tokyo',
    'Milan',
    'Ottawa',
    'Rio de Janeiro',
    'New York',
    'California',
    'London',
    'Paris'
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initFormGroup();
  }

  private initFormGroup() {
    this.formGroup = this.fb.group({
      batches_handled: [null, [Validators.required]],
      yield_acquired: [null, [Validators.required]],
      greenhouse_locations: [null, [Validators.required]]
    });
  }

  public showErrorsInForm() {
    for (const controlName of Object.keys(this.formGroup.controls)) {
      this.formGroup.get(controlName).markAsTouched();
    }
  }

}
