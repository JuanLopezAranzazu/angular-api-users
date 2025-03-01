import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  // obtener roles del usuario y roles requeridos
  const userRoles = tokenService.getRoles();
  const requiredRoles = route.data?.['roles'] as string[];

  // validar si el usuario tiene los permisos necesarios
  if (userRoles.some((role) => requiredRoles.includes(role))) {
    return true;
  }

  // redirigir a la página de acceso no autorizado
  router.navigate(['/unauthorized']);
  return false;
};
