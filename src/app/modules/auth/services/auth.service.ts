import { Router } from '@angular/router';
import { ClientsRoutingModule } from './../../clients/clients-routing.module';
import { UserRoles } from './../../../common/constants/roles';
import { CURRENT_USER_KEY } from './auth-service.constants';
import {
  RegisterPayloadType,
  RegisterResponseModel,
  RegisterResponseType,
  LoginPayloadType,
  LoginResponseType,
  LoginResponseModel,
} from './auth-services.types';
import { map, Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.apiUrl;
  private apiKey = environment.apiKey;
  private currentUser: LoginResponseModel = new LoginResponseModel(
    JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || '{}') || {}
  );

  public currentUser$: BehaviorSubject<LoginResponseModel> =
    new BehaviorSubject(this.currentUser);

  httpOptions = {
    headers: new HttpHeaders({ Auth: this.apiKey }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  private saveToLocalStorage(currentUser: LoginResponseType) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    this.currentUser = new LoginResponseModel(
      JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || '{}') || {}
    );
    this.currentUser$.next(this.currentUser);
  }

  private routerHomeByRole(role: UserRoles) {
    if (role == UserRoles.Admin) {
      this.router.navigate(['/admins']);
    } else if (role == UserRoles.Client) {
      this.router.navigate(['/clients']);
    } else {
      this.router.navigate([`/`]);
    }
  }

  register(user: RegisterPayloadType): Observable<RegisterResponseModel> {
    return this.http
      .post<RegisterResponseType>(`${this.url}/users`, user, this.httpOptions)
      .pipe(map((resp) => new RegisterResponseModel(resp)));
  }

  login(credentials: LoginPayloadType): Observable<LoginResponseModel> {
    return this.http
      .post<LoginResponseType>(`${this.url}/auth/login`, credentials)
      .pipe(
        map((resp) => {
          this.saveToLocalStorage(resp);
          this.routerHomeByRole(resp.user!.role!);
          return new LoginResponseModel(resp);
        })
      );
  }
}
