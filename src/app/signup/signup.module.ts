import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { GrowerFormComponent } from './grower-form/grower-form.component';
import { WarehouseEmployeeFormComponent } from './warehouse-employee-form/warehouse-employee-form.component';
import { SharedFormComponent } from './shared-form/shared-form.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  entryComponents: [SignupComponent],
  declarations: [
    SignupComponent,
    GrowerFormComponent,
    WarehouseEmployeeFormComponent,
    SharedFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class SignupModule { }
