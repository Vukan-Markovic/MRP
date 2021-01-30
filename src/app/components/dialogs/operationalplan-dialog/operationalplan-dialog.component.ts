import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {OperationalPlan } from '../../../models/operationalplan';
import { OperationalPlanService } from '../../../services/operationalplan.service';

@Component({
  selector: 'app-operationalplan-dialog',
  templateUrl: './operationalplan-dialog.component.html',
  styleUrls: ['./operationalplan-dialog.component.css']
})
export class OperationalPlanDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<OperationalPlanDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: OperationalPlan,
              public service: OperationalPlanService
              ) { }

  ngOnInit() {
  }

  public add(): void {
    // this.data.id = -1;
    this.service.addOperationalPlan(this.data);
    // tslint:disable-next-line:quotemark
    if (this.data.id !== -1) {
      this.snackBar.open('Success! Plan id: ' + this.data.id, 'OK', { duration: 2500,
      });
  } else {
    this.snackBar.open('Error!', 'OK', { duration: 2500,
    });
  }
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('You canceled', 'OK', { duration: 1000,
     });
  }

}
