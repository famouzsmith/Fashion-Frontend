import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../model/login-request';
import { LoginResponse } from '../model/login-response';
import { SignupRequest } from '../model/signup-request';
import { SignupResponse } from '../model/signup-response';

/**const API_URL = "http://localhost:8081/api/doLogin";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {}

  //Exisiting Login Method
  doLogin(request: LoginRequest ):Observable<LoginResponse> {
    return this.http.post<LoginResponse>(API_URL, request);
  }



}*/
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private LOGIN_API_URL = 'http://localhost:8081/api/doLogin'; // Ensure this matches your backend
  private SIGNUP_API_URL = 'http://localhost:8081/api/doSignup'; // Ensure this matches your backend

  constructor(private http: HttpClient) {}
  

  // Login Method
  doLogin(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.LOGIN_API_URL, request, {
      headers: { 'Content-Type': 'application/json' }, // Ensure JSON is sent
      withCredentials: true, // If backend requires cookies (e.g., session-based auth)
    });
  }

  doSignup(request: SignupRequest): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(this.SIGNUP_API_URL, request);
  }
}