import { CurrentUserModel } from './../../modules/auth/services/auth-services.types';
import { AuthService } from './../../modules/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserRoles } from '../constants/roles';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.currentUser$.pipe(
      map((currentUser: CurrentUserModel) => {
        if (currentUser.user.role === UserRoles.Client) {
          this.router.navigate([`/clients`]);
          return false;
        } else if (currentUser.user.role !== UserRoles.Admin) {
          this.router.navigate([`/auth/login`]);
          return false;
        }
        return true;
      })
    );
  }
}
