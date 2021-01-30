import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { MaterialService } from './services/material.service';
import { PartOfProductService } from './services/partofproduct.service';
import { ProductWarehouseService } from './services/productwarehouse.service';
import { OperationalPlanService } from './services/operationalplan.service';
import { WarehouseService } from './services/warehouse.service';
import { MaterialWarehouseService } from './services/materialwarehouse.service';
import { ResourcePlanService } from './services/resourceplan.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialComponent } from './components/material/material.component';
import { MaterialDialogComponent } from './components/dialogs/material-dialog/material-dialog.component';
import { PartOfProductComponent } from './components/partofproduct/partofproduct.component';
import { PartOfProductDialogComponent } from './components/dialogs/partofproduct-dialog/partofproduct-dialog.component';
import { ProductWarehouseComponent } from './components/productwarehouse/productwarehouse.component';
import { OperationalPlanComponent } from './components/operationalplan/operationalplan.component';
import { OperationalPlanDialogComponent } from './components/dialogs/operationalplan-dialog/operationalplan-dialog.component';
import { ResourcePlanComponent } from './components/resourceplan/resourceplan.component';
import { ResourcePlanDialogComponent } from './components/dialogs/resourceplan-dialog/resourceplan-dialog.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { MaterialWarehouseComponent } from './components/materialwarehouse/materialwarehouse.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ProductComponent,
    MaterialComponent,
    PartOfProductComponent,
    ProductWarehouseComponent,
    OperationalPlanComponent,
    WarehouseComponent,
    MaterialWarehouseComponent,
    ResourcePlanComponent,

    MaterialDialogComponent,
    PartOfProductDialogComponent,
    OperationalPlanDialogComponent,
    ResourcePlanDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,

    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatPaginatorModule
  ],
  entryComponents: [
    MaterialDialogComponent,
    PartOfProductDialogComponent,
    OperationalPlanDialogComponent,
    ResourcePlanDialogComponent
  ],
  providers: [AuthService, ProductService, MaterialService, PartOfProductService, ProductWarehouseService,
  OperationalPlanService, WarehouseService, MaterialWarehouseService, ResourcePlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
