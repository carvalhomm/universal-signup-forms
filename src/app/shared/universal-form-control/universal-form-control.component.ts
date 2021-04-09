import { Component, Input, Self } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-universal-form-control',
  templateUrl: './universal-form-control.component.html',
  styleUrls: ['./universal-form-control.component.scss']
})
export class UniversalFormControlComponent implements ControlValueAccessor {
  @Input() public set inputLabel(input: string) {
    this.label = input;
    this.customId = this.label && this.label.includes(' ') ? this.label.split(' ').join('').replace('(', '').replace(')', '') + 'Id' : this.label + 'Id';
  }
  @Input() public inputPatterns: any;
  @Input() public inputMask: string;
  @Input() public inputType: 'text' | 'number' | 'date' | 'password';
  @Input() set setCustomErrorMessage(message: any) {
    this.customErrorMessage = message;
  }
  public customErrorMessage: any;
  public customId: string;
  public label: string;
  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(obj: any) {  }

  registerOnChange(fn: any) { }

  registerOnTouched(fn: any) { }

  setDisabledState?(isDisabled: boolean) { }

}
