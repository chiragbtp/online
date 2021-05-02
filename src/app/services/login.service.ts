import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'http://localhost:3000/api';

  constructor(private router: Router,private http: HttpClient) { }


  signIn(params:any): Observable<any> { 
    return this.http.post<any>(`${this.apiUrl}/signin`,params) ;
  }

  getAllUser(): Observable<any> { 
    return this.http.get<any>(`${this.apiUrl}/alluser`) ;
  }

  signOut(): Observable<any> { 
    return this.http.get<any>(`${this.apiUrl}/signout`) ;
  }
}
