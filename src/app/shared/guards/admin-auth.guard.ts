import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router ,RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { Roles } from '../enums/roles';
import { AuthService } from "../services/auth-service";

@Injectable({
  providedIn: 'root'
})
export class AdminAuth implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const role = this.authService.getRole();

    if(role != Roles.ADMIN){
      this.router.navigate(['/home']);
      return false;
    }

    return true;

  }

}
