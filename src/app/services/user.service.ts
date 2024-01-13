import { Injectable } from '@angular/core';
import {AuthenticationRequest, AuthenticationResponse, User} from "../models/User";
import {Observable, tap} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL =  'http://localhost:8075/api/v1/auth';

  constructor(private http: HttpClient) { }

  register(registerRequest: any) {
    return this.http.post<User>(`${this.URL}/register`, registerRequest);
  }
  
  //sans cookie
  authenticate(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.URL}/authenticate`, request);
  }

  getUsers(spec: string, sort: string): Observable<User[]> {
    const url = `http://localhost:8075/api/v1/users/recherche-avancee?spec=${spec}&sort=${sort}`;
    return this.http.get<User[]>(url);
  }


  


}
