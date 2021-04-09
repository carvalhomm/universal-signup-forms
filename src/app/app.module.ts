import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupModule } from './signup/signup.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { UserService } from './services/user.service';
import { UserDetailsModule } from './user-details/user-details.module';
import { UserListModule } from './user-list/user-list.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SignupModule,
    AngularMaterialModule,
    UserDetailsModule,
    UserListModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    HttpClientModule,
    UserService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
