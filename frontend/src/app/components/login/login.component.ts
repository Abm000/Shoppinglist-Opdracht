import { Component, OnInit } from '@angular/core';
import {User} from "../../modules/User";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password:string;
  constructor(private loginService: LoginService,
              private router: Router) {
    this.username="";
    this.password="";
  }

  ngOnInit(): void {
  }
  login(){
    this.loginService.login(this.username, this.password).subscribe(isLoggedIn =>{
      if(isLoggedIn){
        this.loginService.user = new User(this.username,this.password);
        this.router.navigateByUrl('/myProducts').then(r => console.log('Your access is granted'))
      }
        console.log('noooooooooooooooo')
    }
    )
  }
}
