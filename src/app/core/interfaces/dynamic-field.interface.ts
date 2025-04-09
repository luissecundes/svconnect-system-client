import { ValidatorFn } from '@angular/forms';

export interface DynamicField {
  key: string;
  label: string;
  type: string;
  required?: boolean;
  readonly?: boolean;
  colSpan?: number;
  placeholder?: string;
  disabled?: boolean;
  validators?: ValidatorFn[];
  isCurrency?: boolean; 
}
