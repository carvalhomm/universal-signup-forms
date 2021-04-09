import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserListRoutingModule } from './user-list.routes';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    UserListRoutingModule
  ]
})
export class UserListModule { }
