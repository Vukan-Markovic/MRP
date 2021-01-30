import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { PartOfProduct } from '../models/partofproduct';


@Injectable()
export class PartOfProductService {
  private readonly API_URL = 'http://localhost:8080/partOfProduct';

  dataChange: BehaviorSubject<PartOfProduct[]> = new BehaviorSubject<PartOfProduct[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllPartOfProduct(): Observable<PartOfProduct[]> {
    this.httpClient.get<PartOfProduct[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {

        console.log(error.name + ' ' + error.message);

      });

    return this.dataChange.asObservable();

  }
  public addPartOfProduct(partOfProduct: PartOfProduct): void {
    this.httpClient.post(this.API_URL, partOfProduct).subscribe();
  }

  public updatePartOfProduct(partOfProduct: PartOfProduct): void {
    this.httpClient.put(this.API_URL, partOfProduct).subscribe();
  }
/*
  public deleteProduct(id: number): void {
    console.log(this.API_URL + id);
    this.httpClient.delete(this.API_URL + '/' + id).subscribe();
  }*/

}

