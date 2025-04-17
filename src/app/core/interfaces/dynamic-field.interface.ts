import { ValidatorFn } from '@angular/forms';

export interface DynamicField {
  key: string;
  label: string;
  type: string;
  options?: any[]; 
  required?: boolean;
  readonly?: boolean;
  colSpan?: number;
  placeholder?: string;
  disabled?: boolean;
  validators?: ValidatorFn[];
  mask?: 'currency' | 'cpfCnpj' | 'telefone';
}
