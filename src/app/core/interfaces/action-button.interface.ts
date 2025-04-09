export interface ActionButton {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  icon?: string;
  disabled?: boolean;
  action: () => void;
}
