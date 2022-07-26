import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://serverLaravel.test/api/user_apis/";

 
  token = String(localStorage.getItem('auth_token'));

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization':  `Bearer ${ this.token }`
     })
  }

  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

getAll(): Observable<User[]> {
   return this.httpClient.get<User[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

  store(user: any): Observable<any> {
    return this.httpClient.post("http://serverLaravel.test/api/user_apis/store", user,this.httpOptions);
  }

 find(id : any): Observable<User> {
   return this.httpClient.get<User>(this.apiURL  + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id : any, user : any): Observable<User> {
   return this.httpClient.put<User>(this.apiURL + 'update/'+ id, JSON.stringify(user), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id: any){
   return this.httpClient.delete<User>(this.apiURL+'delete/' + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error :any) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

 login(user: any): Observable<any> {
    return this.httpClient.post("http://serverLaravel.test/api/auth/login", user);
 }

}
