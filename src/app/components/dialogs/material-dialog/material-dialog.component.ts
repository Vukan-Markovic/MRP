import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Material } from '../../../models/material';
import { MaterialService } from '../../../services/material.service';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.css']
})
export class MaterialDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<MaterialDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Material,
              public materialService: MaterialService
              ) { }

  ngOnInit() {
  }

  public add(): void {
    // this.data.id = -1;
    this.materialService.addMaterial(this.data);
    // tslint:disable-next-line:quotemark
    if (this.data.id !== -1) {
      this.snackBar.open('Success! Material id: ' + this.data.id, 'OK', { duration: 2500,
      });
  } else {
    this.snackBar.open('Error!', 'OK', { duration: 2500,
    });
  }
  }

  public update(): void {
    this.materialService.updateMaterial(this.data);
    this.snackBar.open('Successfully updated material: ' + this.data.id, 'OK', { duration: 2500,
     });
  }
/*
  public delete(): void {
    this.clanService.deleteClan(this.data.id);
    this.snackBar.open('Uspešno obrisan član: ' + this.data.id, 'U redu', { duration: 2500,
     });
  }
*/
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('You canceled', 'OK', { duration: 1000,
     });
  }

}
