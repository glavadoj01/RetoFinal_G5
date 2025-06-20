import { Component } from '@angular/core';
import { Cliente, ClientServiceService } from '../../services/client-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-page',
  imports: [CommonModule],
  templateUrl: './delete-page.component.html',
  styleUrls: ['./delete-page.component.css'],
})
export class DeletePageComponent {
  cliente?: Cliente;
  cargando = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientServiceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.clientesService.getCliente(id).subscribe({
        next: (data) => {
          this.cliente = data;
          this.cargando = false;
        },
        error: () => {
          this.error = 'No se pudo cargar el cliente';
          this.cargando = false;
        }
      });
    } else {
      this.error = 'ID de cliente inválido';
      this.cargando = false;
    }
  }

  eliminarCliente() {
    if (!this.cliente) return;

    this.clientesService.deleteCliente(this.cliente.id!).subscribe({
      next: () => {
        alert('Cliente eliminado correctamente');
        this.router.navigate(['/clientes']);
      },
      error: () => {
        alert('Error al eliminar cliente');
      }
    });
  }

  cancelar() {
    this.router.navigate(['/clientes']);
  }
}

