import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = 'Bearer Wookie2019';
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `${token}`)
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
