import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {ShoppingService} from "../../services/shopping.service";
import {Product} from "../../modules/Product";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit,OnDestroy {
  userName: string
  products: Product[]
  product: Product
  constructor(private loginService:LoginService,private shoppingService:ShoppingService) {
    this.userName = loginService.user? loginService.user.userName:"";
    this.products = [];
    this.product = new Product("");
  }

  ngOnDestroy(): void {
        this.loginService.user = null;
        this.userName ='';
    }

  ngOnInit(): void {
    this.shoppingService.getProducts(this.userName).subscribe(value => {
       this.products.push(...value)
    })
  }
  addProduct(product:Product){
    if (!product || product.name.trim() =="") return;
    this.shoppingService.saveProduct(product.name,this.userName).subscribe(saved => {
      if (saved&&product) {
        let productReal = new Product(product.name)
        this.products.push(productReal)
      }
    });
  }

}
