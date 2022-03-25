import { Component, OnInit } from '@angular/core';
import {User} from "../../modules/User";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  user: User | undefined
  products: string[]
  constructor() {
    this.products = [];
  }

  ngOnInit(): void {
  }

}
