import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Material } from '../models/material';


@Injectable()
export class MaterialService {
  private readonly API_URL = 'http://localhost:8080/material';

  dataChange: BehaviorSubject<Material[]> = new BehaviorSubject<Material[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllMaterial(): Observable<Material[]> {
    this.httpClient.get<Material[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {

        console.log(error.name + ' ' + error.message);

      });

    return this.dataChange.asObservable();



  }

  public addMaterial(material: Material): void {
    this.httpClient.post(this.API_URL, material).subscribe();
  }

  public updateMaterial(material: Material): void {
    this.httpClient.put(this.API_URL, material).subscribe();
  }
/*
  public deleteProduct(id: number): void {
    console.log(this.API_URL + id);
    this.httpClient.delete(this.API_URL + '/' + id).subscribe();
  }*/

}

