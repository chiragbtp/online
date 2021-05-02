import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  apiUrl = 'http://localhost:3000/api';

  constructor(private router: Router,private http: HttpClient) { }


  signUp(params:any): Observable<any> { 
    return this.http.post<any>(`${this.apiUrl}/signup`,params) ;
  }
}
