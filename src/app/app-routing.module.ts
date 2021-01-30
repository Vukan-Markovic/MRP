import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ProductComponent } from './components/product/product.component';
import { MaterialComponent } from './components/material/material.component';
import { PartOfProductComponent } from './components/partofproduct/partofproduct.component';
import { ProductWarehouseComponent } from './components/productwarehouse/productwarehouse.component';
import { OperationalPlanComponent } from './components/operationalplan/operationalplan.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { MaterialWarehouseComponent } from './components/materialwarehouse/materialwarehouse.component';
import { ResourcePlanComponent } from './components/resourceplan/resourceplan.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'products', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'material', component: MaterialComponent, canActivate: [AuthGuard] },
  { path: 'partOfProduct', component: PartOfProductComponent, canActivate: [AuthGuard] },
  { path: 'productwarehouse', component: ProductWarehouseComponent, canActivate: [AuthGuard] },
  { path: 'operationalProductionPlan', component: OperationalPlanComponent, canActivate: [AuthGuard] },
  { path: 'warehouse', component: WarehouseComponent, canActivate: [AuthGuard] },
  { path: 'materialwarehouse', component: MaterialWarehouseComponent, canActivate: [AuthGuard] },
  { path: 'productResourcePlan', component: ResourcePlanComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
