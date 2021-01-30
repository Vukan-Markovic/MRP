import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResourcePlan } from '../../../models/resourceplan';
import { ResourcePlanService } from '../../../services/resourceplan.service';

@Component({
  selector: 'app-resourceplan-dialog',
  templateUrl: './resourceplan-dialog.component.html',
  styleUrls: ['./resourceplan-dialog.component.css']
})
export class ResourcePlanDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ResourcePlanDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ResourcePlan,
              public service: ResourcePlanService
              ) { }

  ngOnInit() {
  }

  public add(): void {
    // this.data.id = -1;
    this.service.addResourcePlan(this.data);
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
