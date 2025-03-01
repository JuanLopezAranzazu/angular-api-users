import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  imports: [],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.css'
})
export class UnauthorizedComponent {
  title: string = 'No tienes permisos para acceder a esta página';
}
