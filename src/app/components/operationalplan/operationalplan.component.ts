import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { OperationalPlan } from '../../models/operationalplan';
import { OperationalPlanService } from '../../services/operationalplan.service';
import { OperationalPlanDialogComponent } from '../dialogs/operationalplan-dialog/operationalplan-dialog.component';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-operationalplan',
  templateUrl: './operationalplan.component.html',
  styleUrls: ['./operationalplan.component.css']
})
export class OperationalPlanComponent implements OnInit {

displayedColumns = ['id', 'productKey', 'neededQuantityOfProduct', 'actions'];
  dataSource: MatTableDataSource<OperationalPlan>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort)sort: MatSort;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public service: OperationalPlanService) { }

  public loadData() {
     this.service.getAllOperationalPlan().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.sortingDataAccessor = (data, property) => {
      switch (property) {
        case 'id' : return data[property];
        default: return data[property].toLocaleLowerCase();
      }
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
  }

  ngOnInit() {
    this.loadData();
  }

    // tslint:disable-next-line:variable-name
    public openDialog(flag: number, id?: number, productKey?: number, neededQuantityOfProduct?: number) {
      const dialogRef = this.dialog.open(OperationalPlanDialogComponent,
                        // tslint:disable-next-line:object-literal-shorthand
                        {data: {id: id, productKey: productKey, neededQuantityOfProduct: neededQuantityOfProduct}});
      dialogRef.componentInstance.flag = flag;
      dialogRef.afterClosed().subscribe(result => {
        // tslint:disable-next-line:triple-equals
        if (result == 1) {

          sleep(4000);
          this.loadData();
          }

        setTimeout(() => {location.reload(); }, 2000);
        });
      }

      applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }

  }

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
