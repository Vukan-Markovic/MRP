import { Component, OnInit } from '@angular/core';
import { PartOfProduct } from '../../models/partofproduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PartOfProductService } from '../../services/partofproduct.service';
import { PartOfProductDialogComponent } from '../dialogs/partofproduct-dialog/partofproduct-dialog.component';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-partofproduct',
  templateUrl: './partofproduct.component.html',
  styleUrls: ['./partofproduct.component.css']
})
export class PartOfProductComponent implements OnInit {

displayedColumns = ['productKey', 'nameProduct', 'id', 'namePartOfProduct', 'dimensionsPartOfProduct',
'idMaterial', 'nameMaterial', 'actions'];
  dataSource: MatTableDataSource<PartOfProduct>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort)sort: MatSort;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public partOfProductService: PartOfProductService) { }

  public loadData() {
     this.partOfProductService.getAllPartOfProduct().subscribe(data => {
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
    console.log(data);
  });
  }

  ngOnInit() {
    this.loadData();
  }

    // tslint:disable-next-line:variable-name
    public openDialog(flag: number, id?: number, namePartOfProduct?: string, dimensionsPartOfProduct?: string, idMaterial?: number,
                      nameMaterial?: string, productKey?: number, nameProduct?: string) {
      const dialogRef = this.dialog.open(PartOfProductDialogComponent,
                        // tslint:disable-next-line:object-literal-shorthand
                        {data: {id: id, namePartOfProduct: namePartOfProduct, dimensionsPartOfProduct: dimensionsPartOfProduct,
                          // tslint:disable-next-line: object-literal-shorthand
                          idMaterial: idMaterial, nameMaterial: nameMaterial, productKey: productKey, nameProduct: nameProduct}});
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
