import { UserRoles } from 'src/app/common/constants/roles';
import { CurrentUserModel } from './../../modules/auth/services/auth-services.types';
import { AuthService } from './../../modules/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.currentUser$.pipe(
      map((currentUser: CurrentUserModel) => {
        if (currentUser.user.role === UserRoles.Admin) {
          this.router.navigate([`/admins`]);
          return false;
        } else if (currentUser.user.role !== UserRoles.Client) {
          this.router.navigate([`/auth/login`]);
          return false;
        }
        return true;
      })
    );
  }
}
