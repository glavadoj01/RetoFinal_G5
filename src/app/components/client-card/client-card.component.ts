import { Component, Input } from '@angular/core';
import { Cliente } from '../../services/client-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css'],
  imports: []
})
export class ClientCardComponent {
  @Input() cliente!: Cliente;

  constructor(private router: Router) {}

  eliminar() {
    this.router.navigate(['/delete', this.cliente.id]); // ← Ruta correcta según tu configuración
  }
}
