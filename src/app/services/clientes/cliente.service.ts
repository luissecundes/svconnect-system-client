import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private apiUrl = 'url_da_api';

  constructor(private http: HttpClient) {}

  updateCliente(cliente: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/clientes/${cliente.id}`, cliente);
  }
}
