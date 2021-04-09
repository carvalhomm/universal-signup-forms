import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversalFormControlComponent } from './universal-form-control/universal-form-control.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { NgxMaskModule, MaskPipe } from 'ngx-mask';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';

@NgModule({
  entryComponents: [
    WarningDialogComponent
  ],
  declarations: [UniversalFormControlComponent, WarningDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxMaskModule.forChild()
  ],
  exports: [
    UniversalFormControlComponent
  ],
  providers: [{ provide: MaskPipe, useClass: MaskPipe }]
})
export class SharedModule { }
