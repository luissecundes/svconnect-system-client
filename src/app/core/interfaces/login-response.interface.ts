export interface LoginResponse {
  status: string;
  code: number;
  data: string; // Aqui está o token JWT
  message: string;
  errors: string[];
}
