import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroesInterface } from '../interfaces/heroes.interface';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private _url = environment.url;
  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<HeroesInterface[]> {
    return this.http.get<HeroesInterface[]>(`${this._url}/heroes`);
  }

  getHeroeForId(heroeName: string): Observable<HeroesInterface> {
    return this.http.get<HeroesInterface>(`${this._url}/heroes/${heroeName}`);
  }

  getHeroesForSuggestions(txtHeroe: string): Observable<HeroesInterface[]> {
    return this.http.get<HeroesInterface[]>(
      `${this._url}/heroes/?q=${txtHeroe}&_limit=6`
    );
  }

  addHeroe(heroe: HeroesInterface): Observable<HeroesInterface> {
    return this.http.post<HeroesInterface>(`${this._url}/heroes`, heroe);
  }

  editHeroe(heroe: HeroesInterface): Observable<HeroesInterface> {
    return this.http.put<HeroesInterface>(
      `${this._url}/heroes/${heroe.id}`,
      heroe
    );
  }

  removeHeroe(heroe: HeroesInterface): Observable<HeroesInterface> {
    return this.http
      .delete<HeroesInterface>(`${this._url}/heroes/${heroe.id}`)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }
}
