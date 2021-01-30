import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { MaterialWarehouse } from '../models/materialwarehouse';


@Injectable()
export class MaterialWarehouseService {
  private readonly API_URL = 'http://localhost:8080/materialwarehouse';

  dataChange: BehaviorSubject<MaterialWarehouse[]> = new BehaviorSubject<MaterialWarehouse[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllMaterialWarehouse(): Observable<MaterialWarehouse[]> {
    this.httpClient.get<MaterialWarehouse[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {

        console.log(error.name + ' ' + error.message);

      });

    return this.dataChange.asObservable();

  }

}

