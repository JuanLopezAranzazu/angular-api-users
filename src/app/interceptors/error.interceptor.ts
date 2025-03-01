import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  // interceptar la respuesta y manejar el error 401
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        // eliminar el token y redirigir al login
        tokenService.removeToken();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};
