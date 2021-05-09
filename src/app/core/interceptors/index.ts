import { AuthInterceptor } from './Auth.Interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {UrlInterceptor} from './url.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, multi: true, useClass: UrlInterceptor },
  // { provide: HTTP_INTERCEPTORS, multi: true, useClass: HttpErrorInterceptor},
  { provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor}
];
