import { CurrentUserModel } from './../../modules/auth/services/auth-services.types';
import { AuthService } from './../../modules/auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private currentUser!: CurrentUserModel;

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe((currentUser) => {
      this.currentUser = currentUser;
    });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!!this.currentUser.access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.currentUser.access_token}`,
        },
      });
    }

    return next.handle(request);
  }
}
