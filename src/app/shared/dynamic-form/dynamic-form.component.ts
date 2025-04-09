// dynamic-form.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';
import { DynamicField } from '../../core/interfaces/dynamic-field.interface';
import { CurrencyMaskDirective } from '../../core/utils/currency-mask.directive';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CurrencyMaskDirective],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  @Input() fields: DynamicField[] = [];
  @Input() formTitle: string = '';
  @Input() formData: Record<string, any> = {};

  @Output() formChanged = new EventEmitter<FormGroup>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({});
    this.fields.forEach((field) => {
      this.form.addControl(
        field.key,
        this.fb.control(this.formData[field.key] ?? '', field.validators ?? [])
      );
    });

    this.form.valueChanges.subscribe(() => {
      this.formChanged.emit(this.form);
    });
  }
}

