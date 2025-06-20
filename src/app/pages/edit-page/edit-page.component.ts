import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Cliente,
  ClientServiceService,
} from '../../services/client-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent {
  clienteForm!: FormGroup;
  clienteId!: number;
  cargando = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.clienteId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.clienteId) {
      this.error = 'ID inválido';
      this.cargando = false;
      return;
    }

    this.clientesService.getCliente(this.clienteId).subscribe({
      next: (cliente) => {
        this.clienteForm = this.fb.group({
          name: [cliente.name, Validators.required],
          contactEmail: [
            cliente.contactEmail,
            [Validators.required, Validators.email],
          ],
          revenue: [cliente.revenue, [Validators.required, Validators.min(0)]],
          startDate: [cliente.startDate, Validators.required],
        });
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudo cargar el cliente';
        this.cargando = false;
      },
    });
  }
  
  guardarCambios(): void {
    if (this.clienteForm.invalid) return;

    const datosActualizados: Cliente = {
      id: this.clienteId,
      ...this.clienteForm.value
    };

    this.clientesService.updateCliente(datosActualizados).subscribe({
      next: () => {
        alert('Cliente actualizado correctamente');
        this.router.navigate(['/list']);
      },
      error: () => {
        this.error = 'Error al actualizar el cliente';
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/list']);
  }
}
