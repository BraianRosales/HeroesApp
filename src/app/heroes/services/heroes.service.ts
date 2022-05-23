import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroesInterface } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<HeroesInterface[]>(`${this.url}/heroes`);
  }
}
