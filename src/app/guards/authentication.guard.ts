import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const authenticationGuard: CanActivateFn = () => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  // validar si el usuario esta autenticado
  if (tokenService.isAuthenticated()) {
    return true;
  }
  // si no esta autenticado redirigir al login
  router.navigate(['/login']);
  return false;
};
