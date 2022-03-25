import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private httpClient: HttpClient) { }
  public saveProduct(product: string, username: string): Observable<any>{
    let httpParams = new HttpParams()
      .append("product", product)
      .append("username", username)
    return this.httpClient.post<any>(`http://localhost:8060/product`, "", {
      params: httpParams
    })

  }
}
