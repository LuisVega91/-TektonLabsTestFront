import { CurrentUserModel } from './../../modules/auth/services/auth-services.types';
import { AuthService } from './../../modules/auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.currentUser$.pipe(
      map((currentUser: CurrentUserModel) => {
        if (!!currentUser.access_token) {
          return true;
        }
        this.router.navigateByUrl('/auth/login');
        return false;
      })
    );
  }
}
