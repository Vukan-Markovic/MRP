import { FormsModule } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PartOfProduct } from '../../../models/partofproduct';
import { PartOfProductService } from '../../../services/partofproduct.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxWatermarkModule } from 'ngx-watermark';

@Component({
  selector: 'app-partofproduct-dialog',
  templateUrl: './partofproduct-dialog.component.html',
  styleUrls: ['./partofproduct-dialog.component.css']
})
export class PartOfProductDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<PartOfProductDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PartOfProduct,
              public partOfProductService: PartOfProductService
              ) { }

  ngOnInit() {

  }

  public add(): void {
    // this.data.id = -1;
    this.partOfProductService.addPartOfProduct(this.data);
    // tslint:disable-next-line:quotemark
    if (this.data.id !== -1) {
      this.snackBar.open('Success! Part of product id: ' + this.data.id, 'OK', { duration: 2500,
      });
  } else {
    this.snackBar.open('Error!', 'OK', { duration: 2500,
    });
  }
  }

  public update(): void {
    this.partOfProductService.updatePartOfProduct(this.data);
    this.snackBar.open('Successfully updated part: ' + this.data.id, 'OK', { duration: 2500,
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
