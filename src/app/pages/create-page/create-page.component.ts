import { Component } from '@angular/core';
import { Cliente, ClientServiceService } from '../../services/client-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-page',
  imports: [CommonModule],
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css'],
})
export class CreatePageComponent {
  cliente: Cliente = { name: '', email: '', phone: '' };
  cargando = false;
  error = '';

  constructor(private router: Router, private clientesService: ClientServiceService) {}

  crearCliente() {
    this.cargando = true;
    this.clientesService.createCliente(this.cliente).subscribe({
      next: () => {
        alert('Cliente creado correctamente');
        this.router.navigate(['/clientes']);
      },
      error: () => {
        this.error = 'Error al crear cliente';
        this.cargando = false;
      },
    });
  }

  cancelar() {
    this.router.navigate(['/clientes']);
  }
}
