import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:3000';
  constructor(private _http: HttpClient) {}

  signin(body: any) {
    return this._http.post(`${this.baseUrl}/signin`, body);
  }

  _isLogged(): Boolean {
    return !!localStorage.getItem('access_token');
  }
  router = inject(Router);

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    this.router.navigate(['/login'])
  }
}
