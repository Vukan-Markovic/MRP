import { Component, OnInit } from '@angular/core';
import { ProductWarehouse } from '../../models/productwarehouse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ProductWarehouseService } from '../../services/productwarehouse.service';
// import { ClanDialogComponent } from '../dialogs/clan-dialog/clan-dialog.component';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-productwarehouse',
  templateUrl: './productwarehouse.component.html',
  styleUrls: ['./productwarehouse.component.css']
})
export class ProductWarehouseComponent implements OnInit {

displayedColumns = ['productKey', 'idWarehouse', 'quantity'/*, 'actions'*/];
  dataSource: MatTableDataSource<ProductWarehouse>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort)sort: MatSort;

  constructor(public httpClient: HttpClient,
              // public dialog: MatDialog,
              public productWarehouseService: ProductWarehouseService) { }

  public loadData() {
     this.productWarehouseService.getAllProductWarehouse().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.sortingDataAccessor = (data, property) => {
      switch (property) {
        case 'productKey' : return data[property];
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
    /*public openDialog(flag: number, id: number, JMBGClana: number, imeClana: string, prezimeClana: string,
                      telefonClana: string, adresaClana: string, racun: number) {
      const dialogRef = this.dialog.open(ClanDialogComponent,
                        // tslint:disable-next-line:object-literal-shorthand
                        {data: {id: id, JMBGClana: JMBGClana, imeClana: imeClana,
                          // tslint:disable-next-line: object-literal-shorthand
                          prezimeClana: prezimeClana, telefonClana: telefonClana, adresaClana: adresaClana, racun: racun}});
      dialogRef.componentInstance.flag = flag;
      dialogRef.afterClosed().subscribe(result => {
        // tslint:disable-next-line:triple-equals
        if (result == 1) {

          sleep(4000);
          this.loadData();
          }

        setTimeout(() => {location.reload(); }, 2000);
        });
      }*/

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
