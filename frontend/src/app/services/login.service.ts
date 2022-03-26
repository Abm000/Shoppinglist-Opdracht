import { Injectable } from '@angular/core';
import {catchError, Observable, Subject, Subscription, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../modules/User";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User|null;
  sub:Observable<User|null>
  constructor(private httpClient: HttpClient,private router: Router) {
    this.user = null;
    this.sub = new Observable(observer => {
      observer.next(this.user);
    })
    this.sub.subscribe(user => {
      if (!user) this.router.navigateByUrl('/').then(() => console.log('login'))
    })
  }
  public login(username:string, password:string): Observable<boolean> {
    return this.httpClient.post<boolean>
    (`http://localhost:8060/login`, new User(username,password)).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse){
    console.log("something wrong happened");
    return throwError(error);
  }

}
