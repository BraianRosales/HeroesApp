import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interface/user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _url: string = environment.url;
  private _user: User | undefined;

  constructor(private http: HttpClient, private _router: Router) {}

  getUser(): User {
    return { ...this._user! };
  }

  verifyAuthentication(): Observable<boolean> {
    if (!sessionStorage.getItem('token')) {
      return of(false);
    }
    return this.http.get<User>(`${this._url}/usuarios/1`).pipe(
      map((user) => {
        this._user = user;
        return true;
      })
    );
  }

  user(): Observable<User> {
    return this.http
      .get<User>(`${this._url}/usuarios/1`)
      .pipe(
        tap((user) => sessionStorage.setItem('token', JSON.stringify(user.id)))
      );
  }
}
