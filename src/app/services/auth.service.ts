import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  // login de usuarios
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      `${environment.API_URL}/auth/login`,
      { username, password },
      httpOptions
    );
  }

  // registro de usuarios
  register(name: string, username: string, password: string): Observable<any> {
    return this.http.post(
      `${environment.API_URL}/auth/register`,
      {
        name,
        username,
        password,
      },
      httpOptions
    );
  }
}
