import { Component, OnInit } from '@angular/core';
import { MaterialWarehouse } from '../../models/materialwarehouse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MaterialWarehouseService } from '../../services/materialwarehouse.service';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-materialwarehouse',
  templateUrl: './materialwarehouse.component.html',
  styleUrls: ['./materialwarehouse.component.css']
})
export class MaterialWarehouseComponent implements OnInit {

displayedColumns = ['idMaterial', 'idWarehouse', 'quantity'];
  dataSource: MatTableDataSource<MaterialWarehouse>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort)sort: MatSort;

  constructor(public httpClient: HttpClient,
              public service: MaterialWarehouseService) { }

  public loadData() {
     this.service.getAllMaterialWarehouse().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.sortingDataAccessor = (data, property) => {
      switch (property) {
        case 'idMaterial' : return data[property];
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
