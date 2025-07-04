import { Component } from '@angular/core';
import { Cliente, ClientServiceService } from '../../services/client-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css'],
})
export class CreatePageComponent {
  cliente: Cliente = { name: '', contactEmail: '', revenue: 0, startDate: '' }; // Asegúrate de que el cliente tenga todos los campos
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
