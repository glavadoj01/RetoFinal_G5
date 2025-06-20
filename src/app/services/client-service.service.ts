import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Cliente {
  id: number;
  name: string;
  contactEmail: string;
  revenue: number;
  startDate: string; // formato ISO 8601, ejemplo: "2021-04-25T12:23:16.000Z"
}

@Injectable({
  providedIn: 'root',
})
export class ClientServiceService {
  private apiUrl = 'https://clients-example-api.fly.dev/api/clients';
  private headers = new HttpHeaders({ 'x-group-id': '5' });
  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl, { headers: this.headers });
  }

  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }

}
