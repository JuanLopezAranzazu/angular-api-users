import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private BASE_URL: string = 'http://localhost:8080/api/v1/users'; // api

  constructor(private http: HttpClient) {}

  // obtener el usuario autenticado
  getAuthenticatedUser(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/me`);
  }
}
