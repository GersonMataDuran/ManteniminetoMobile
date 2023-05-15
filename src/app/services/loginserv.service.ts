import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface LoginResponse {
  message: string;
  isSuccess: boolean;
  errors: string;
  expireDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginservService {

  isLoggedIn: boolean = false;
  error: any;

  constructor(
    private http: HttpClient,
    public datos: LoginResponse
  ) { }

  login(data: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post<LoginResponse>('http://est03des/RestApiHorasExtras/api/auth/login', JSON.stringify(data), { headers })
      .subscribe(
        (response) => {
          this.datos = response;
          if (response.isSuccess) {
            this.isLoggedIn = true;
          }
        },
        (error) => {
          this.error = error;
          this.isLoggedIn = false;
        }
      );
  }

  logout() {
    this.isLoggedIn = false;
  }
}
