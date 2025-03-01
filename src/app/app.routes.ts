import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { MissingComponent } from './pages/missing/missing.component';
import { TestComponent } from './pages/test/test.component';
// guards
import { authenticationGuard } from './guards/authentication.guard';
import { roleGuard } from './guards/role.guard';

// rutas
export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authenticationGuard] }, // ruta por defecto
  { path: 'login', component: LoginComponent }, // ruta de login
  { path: 'register', component: RegisterComponent }, // ruta de registro
  {
    path: 'test',
    component: TestComponent,
    canActivate: [authenticationGuard, roleGuard],
    data: { roles: ['ROLE_ADMIN'] },
  }, // ruta protegida por roles
  { path: 'unauthorized', component: UnauthorizedComponent }, // ruta no autorizada
  { path: '**', component: MissingComponent }, // ruta no encontrada
];
