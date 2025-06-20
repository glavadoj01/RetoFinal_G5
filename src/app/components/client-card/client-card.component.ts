import { Component, Input } from '@angular/core';
import { Cliente } from '../../services/client-service.service';

@Component({
  selector: 'app-client-card',
  imports: [],
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css'],
})
export class ClientCardComponent {
  @Input() cliente!: Cliente;
}
