import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { AppRoutingPathEnum } from './enums/app-routing-path';

const routes: Routes = [
  { path: `${AppRoutingPathEnum.login}`, component: LoginComponent },
  { path: '', redirectTo: `${AppRoutingPathEnum.login}`, pathMatch: 'full' },
  { path: '**', redirectTo: `${AppRoutingPathEnum.notFound}/${AppRoutingPathEnum.notFound}` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
