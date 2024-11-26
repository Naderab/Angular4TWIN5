import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {

  @Input() control!: FormControl | NgModel;
  
  message : {[key:string]:string} = {
    required: 'This field is required',
    pattern: 'This field is invalid',
    minlength: 'Minimum length not met',
    maxlength:'Maximum length exceeded'
  }
  get errors() : string[] {
    return this.control.errors ? Object.keys(this.control.errors) : []
  }
}
