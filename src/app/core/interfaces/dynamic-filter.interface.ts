export interface FilterField {
  key: string;
  label: string;
  type?: 'text' | 'date' | 'number' | 'select';
  options?: { label: string; value: any }[];
}
