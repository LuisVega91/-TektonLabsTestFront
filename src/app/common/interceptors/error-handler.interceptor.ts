import { ModalService } from './../modules/modal/services/modal.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, filter, tap, catchError, throwError, map, of } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private spinner: NgxSpinnerService,
    private modalService: ModalService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.spinner.show();
    return next.handle(request).pipe(
      filter((event: any) => event instanceof HttpResponse),
      tap((resp: HttpResponse<any>) => this.spinner.hide()),
      catchError((error) => this.error(error))
    );
  }

  private error(err: any) {
    this.spinner.hide();
    this.modalService.openErrorModal(err.error.message);
    return throwError(() => new Error(err));
  }
}
