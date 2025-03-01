import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  title: string = 'Bienvenido a la página de inicio';
  user: any = null;
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  // obtener datos del usuario autenticado
  getUser() {
    this.userService.getAuthenticatedUser().subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (err) => {
        this.errorMessage = 'Error al obtener los datos del usuario.';
        console.error('Error:', err);
      },
    });
  }

  // cerrar sesión
  logout() {
    this.tokenService.removeToken(); // elimina el token del local storage
    this.tokenService.removeRoles(); // elimina los roles del local storage
    this.router.navigate(['/login']);
  }
}
