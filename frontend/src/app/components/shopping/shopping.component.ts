import { Component, OnInit } from '@angular/core';
import {User} from "../../modules/User";
import {LoginService} from "../../services/login.service";
import {ShoppingService} from "../../services/shopping.service";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  userName: string
  products: string[]
  product: string
  constructor(private loginService:LoginService,private shoppingService:ShoppingService) {
    this.userName = loginService.user.userName
    this.products = [];
    this.product = ''
  }

  ngOnInit(): void {
  }
  addProduct(product:string){
    this.shoppingService.saveProduct(product,this.userName).subscribe(value => {
      this.products.push(product)
    })
  }

}
