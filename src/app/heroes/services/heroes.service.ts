import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroesInterface } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<HeroesInterface[]> {
    return this.http.get<HeroesInterface[]>(`${this.url}/heroes`);
  }

  getHeroeForId(heroeName: string): Observable<HeroesInterface> {
    return this.http.get<HeroesInterface>(`${this.url}/heroes/${heroeName}`);
  }
}
