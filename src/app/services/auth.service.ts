import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private BASE_URL: string = 'http://localhost:8080/api/v1/auth'; // api

  constructor(private http: HttpClient) {}

  // login de usuarios
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      `${this.BASE_URL}/login`,
      { username, password },
      httpOptions
    );
  }

  // registro de usuarios
  register(name: string, username: string, password: string): Observable<any> {
    return this.http.post(
      `${this.BASE_URL}/register`,
      {
        name,
        username,
        password,
      },
      httpOptions
    );
  }
}
