import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Cliente {
  id?: number;
  name: string;
  contactEmail: string;
  revenue: number;
  startDate: string; 
}

@Injectable({
  providedIn: 'root',
})
export class ClientServiceService {
  private apiUrl = 'https://clients-example-api.fly.dev/api/clients';
  private headers = new HttpHeaders({ 'x-group-id': '5' });
  
  constructor(private http: HttpClient) {}

  // GET: Obtener todos los clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl, { headers: this.headers });
  }

  // DELETE: Eliminar cliente por ID
  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }

  // GET: Obtener cliente por ID
  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }

  // PUT: Actualizar cliente
  updateCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this.apiUrl}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente, { headers: this.headers });
  }

  // POST: Crear nuevo cliente
  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente, { headers: this.headers });
  }
}
