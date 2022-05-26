import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroesInterface } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private _url = environment.url;

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
    return this.http.post<HeroesInterface>(`${this._url}/heroes`,heroe);
  }
}
