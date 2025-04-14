// Definindo a interface AlertState
export interface AlertState {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}
