import { Component } from '@angular/core';
import { Cliente, ClientServiceService } from '../../services/client-service.service';
import { ClientCardComponent } from '../../components/client-card/client-card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-page',
  imports: [CommonModule, ClientCardComponent],
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent {
  clientes: Cliente[] = [];
  cargando: boolean = true;
  error: string = '';

  constructor(private clienteService: ClientServiceService) {

  }

  ngOnInit() {
    this.clienteService.getClientes().subscribe({
      next: (data) => {
        this.clientes = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los clientes';
        console.error(err);
        this.cargando = false;
      }
    });
  }
}
