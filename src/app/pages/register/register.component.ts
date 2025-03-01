import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true,
})
export class RegisterComponent {
  name: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // registro de usuario
  onSubmit() {
    // validación de campos
    if (
      !this.name ||
      !this.username ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    // validación de contraseñas
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    this.authService
      .register(this.name, this.username, this.password)
      .subscribe({
        next: (response) => {
          this.successMessage = 'Registro exitoso. Redirigiendo al login...';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        error: (err) => {
          this.errorMessage = 'Error en el registro. Intenta de nuevo.';
          console.error('Error en el registro', err);
        },
      });
  }
}
