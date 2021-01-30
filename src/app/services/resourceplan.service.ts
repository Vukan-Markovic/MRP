import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ResourcePlan } from '../models/resourceplan';


@Injectable()
export class ResourcePlanService {
  private readonly API_URL = 'http://localhost:8080/productResourcePlan';

  dataChange: BehaviorSubject<ResourcePlan[]> = new BehaviorSubject<ResourcePlan[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllResourcePlan(): Observable<ResourcePlan[]> {
    this.httpClient.get<ResourcePlan[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {

        console.log(error.name + ' ' + error.message);

      });

    return this.dataChange.asObservable();

  }

  public addResourcePlan(plan: ResourcePlan): void {
    this.httpClient.post(this.API_URL, plan).subscribe();
    this.httpClient.post('http://localhost:8080/materialProductResoursePlan', plan).subscribe();
  }

}

