import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  // login de usuarios
  onSubmit() {
    // validación de campos
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, ingresa tus credenciales.';
      return;
    }

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.tokenService.setToken(response.token); // guarda el token en el local storage
        this.tokenService.setRoles(response.roles); // guarda los roles en el local storage
        this.router.navigate(['/']); // redirige al home
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas';
        console.error('Error en el login', err);
      },
    });
  }
}
