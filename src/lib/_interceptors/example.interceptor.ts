import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * @description An HTTP interceptor that adds an Authorization header with a Bearer token
 * to all outgoing HTTP requests.
 *
 * @class
 * @implements {HttpInterceptor}
 */
@Injectable({
  providedIn: 'root',
})
export class ExampleInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer token'),
    });
    return next.handle(clonedRequest);
  }
}