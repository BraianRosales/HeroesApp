import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router, CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';


// NO HACER FORMAT DOCUMENT!!!!.

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate{
  constructor(private _router: Router, private _autService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this._autService.verifyAuthentication()
      .pipe(
        tap((isAuthenticated) => {
          if (!isAuthenticated) {
            this._router.navigate(['./auth/login'])
          }
        })
      )
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return this._autService.verifyAuthentication()
      .pipe(
        tap((isAuthenticated) => {
          if (!isAuthenticated) {
            this._router.navigate(['./auth/login'])
          }
        })
      )
  }
}
