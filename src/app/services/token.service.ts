import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly TOKEN_KEY: string = 'auth_token'; // token
  private readonly ROLES_KEY: string = 'auth_roles'; // roles

  constructor(@Inject('LOCAL_STORAGE') private localStorage: Storage | null) {}

  // guardar el token en el local storage
  setToken(token: string): void {
    this.localStorage?.setItem(this.TOKEN_KEY, token);
  }

  // obtener el token del local storage
  getToken(): string | null {
    return this.localStorage?.getItem(this.TOKEN_KEY) || null;
  }

  // remover el token del local storage
  removeToken(): void {
    this.localStorage?.removeItem(this.TOKEN_KEY);
  }

  // validar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // guardar los roles en el local storage
  setRoles(roles: string[]): void {
    this.localStorage?.setItem(this.ROLES_KEY, JSON.stringify(roles));
  }

  // obtener los roles del local storage
  getRoles(): string[] {
    const roles = this.localStorage?.getItem(this.ROLES_KEY);
    return roles ? JSON.parse(roles) : [];
  }

  // remover los roles del local storage
  removeRoles(): void {
    this.localStorage?.removeItem(this.ROLES_KEY);
  }
}
