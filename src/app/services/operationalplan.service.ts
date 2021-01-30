import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { OperationalPlan } from '../models/operationalplan';


@Injectable()
export class OperationalPlanService {
  private readonly API_URL = 'http://localhost:8080/operationalProductionPlan';

  dataChange: BehaviorSubject<OperationalPlan[]> = new BehaviorSubject<OperationalPlan[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllOperationalPlan(): Observable<OperationalPlan[]> {
    this.httpClient.get<OperationalPlan[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {

        console.log(error.name + ' ' + error.message);

      });

    return this.dataChange.asObservable();

  }

  public addOperationalPlan(plan: OperationalPlan): void {
    this.httpClient.post(this.API_URL, plan).subscribe();
    this.httpClient.post('http://localhost:8080/productOperationalProductionPlan', plan).subscribe();
  }

}

