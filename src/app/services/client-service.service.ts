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

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    const headers = new HttpHeaders({
      'x-group-id': '5' // ID del grupo al que pertenece el usuario
    });

    return this.http.get<Cliente[]>(this.apiUrl, { headers });
  }
}
