import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Warehouse } from '../models/warehouse';


@Injectable()
export class WarehouseService {
  private readonly API_URL = 'http://localhost:8080/warehouse';

  dataChange: BehaviorSubject<Warehouse[]> = new BehaviorSubject<Warehouse[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllWarehouse(): Observable<Warehouse[]> {
    this.httpClient.get<Warehouse[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {

        console.log(error.name + ' ' + error.message);

      });

    return this.dataChange.asObservable();

  }
}
