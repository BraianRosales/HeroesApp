import { Component, Input, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroesInterface } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public txtHeroe: string = '';
  public lsHeroes: HeroesInterface[] = [];
  public heroeSelected!: HeroesInterface;
  public sinHeroe: boolean = false;
  public alert: boolean = false;

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {}

  getHeroes() {
    this._heroesService
      .getHeroesForSuggestions(this.txtHeroe)
      .subscribe((heroes) => (this.lsHeroes = heroes));
    if (this.lsHeroes.length > 0) {
      this.sinHeroe = false;
    } else {
      this.sinHeroe = true;
    }
  }

  getSuggestions(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value == undefined);

    if (event.option.value == undefined) {
      this.alert = true;
    } else {
      this.alert = false;
      const heroe: HeroesInterface = event.option.value;
      this.txtHeroe = heroe.superhero;
      this._heroesService
        .getHeroeForId(heroe.id!)
        .subscribe((heroe) => (this.heroeSelected = heroe));
    }
  }
}
