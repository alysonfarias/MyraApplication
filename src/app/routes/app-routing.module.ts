import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { LoginComponent } from '../pages/login/login.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { AppRoutingPathEnum } from './enums/app-routing-path';

const routes: Routes = [
  { path: `${AppRoutingPathEnum.login}`, component: LoginComponent },
  { path: `${AppRoutingPathEnum.dashboard}`, canActivate: [AuthGuard], component: DashboardComponent },
  { path: '', redirectTo: `${AppRoutingPathEnum.login}`, pathMatch: 'full' },
  { path: '**', redirectTo: `${AppRoutingPathEnum.notFound}/${AppRoutingPathEnum.notFound}` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
