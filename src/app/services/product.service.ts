import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../models/product';


@Injectable()
export class ProductService {
  private readonly API_URL = 'http://localhost:8080/products';

  dataChange: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllProduct(): Observable<Product[]> {
    this.httpClient.get<Product[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {

        console.log(error.name + ' ' + error.message);

      });

    return this.dataChange.asObservable();



  }
  /*public addProduct(product: Product): void {
    this.httpClient.post(this.API_URL, product).subscribe();
  }

  public updateProduct(product: Product): void {
    this.httpClient.put(this.API_URL + '/' + product.productKey, product).subscribe();
  }

  public deleteProduct(id: number): void {
    console.log(this.API_URL + id);
    this.httpClient.delete(this.API_URL + '/' + id).subscribe();
  }*/

}

