import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../modules/Product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private httpClient: HttpClient) { }

  public saveProduct(product: string, username: string): Observable<boolean>{
    let httpParams = new HttpParams()
      .append("product", product)
      .append("username", username)
    return this.httpClient.post<boolean>(`http://localhost:8060/product`, "", {
      params: httpParams
    })
  }

  public getProducts(username: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`http://localhost:8060/product/` + username)
  }
}
