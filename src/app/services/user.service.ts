import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}

  // obtener el usuario autenticado
  getAuthenticatedUser(): Observable<any> {
    return this.http.get(`${environment.API_URL}/users/me`);
  }
}
