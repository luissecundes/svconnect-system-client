export class HttpException extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;

    Object.setPrototypeOf(this, HttpException.prototype);
  }

  static fromHttpErrorResponse(error: any): HttpException {
    switch (error.status) {
      case 400:
        return new HttpException(400, 'Falha na requisição');
      case 401:
        return new HttpException(401, 'Usuário não autorizado');
      case 404:
        return new HttpException(404, 'Página não encontrada');
      case 500:
        return new HttpException(500, 'Erro de Servidor');
      default:
        return new HttpException(error.status, 'Ocorreu um erro inesperado.');
    }
  }
}
