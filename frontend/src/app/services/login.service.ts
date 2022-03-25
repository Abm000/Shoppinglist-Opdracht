import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../modules/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;
  constructor(private httpClient: HttpClient) {
    this.user = new User("","")
  }
  public login(username:string, password:string): Observable<boolean> {
    return this.httpClient.post<boolean>(`http://localhost:8060/login`, new User(username,password));
  }

}
