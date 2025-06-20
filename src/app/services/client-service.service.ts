import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Cliente {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientServiceService {
  private apiUrl = 'https://clients-example-api.fly.dev/api/clients';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }
}
