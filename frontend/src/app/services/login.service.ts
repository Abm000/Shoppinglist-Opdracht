import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../modules/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient: HttpClient) {

  }
  public login(username:string, password:string): Observable<boolean> {

    return this.httpClient.post<boolean>(`http://localhost:8060/login`, new User(username,password));
  }

}
