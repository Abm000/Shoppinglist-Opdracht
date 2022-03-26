import { Injectable } from '@angular/core';
import {Observable, Subject, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
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
      if (!user) this.router.navigateByUrl('/').then(r => console.log('invalid user'))
    })
  }
  public login(username:string, password:string): Observable<boolean> {
    return this.httpClient.post<boolean>(`http://localhost:8060/login`, new User(username,password));
  }

}
