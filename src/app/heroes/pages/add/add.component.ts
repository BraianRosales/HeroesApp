import { Component, OnInit } from '@angular/core';
import { HeroesInterface, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public creators = [
    {
      name: 'DC comics',
      desc: 'DC - comics',
    },
    {
      name: 'Marvel comics',
      desc: 'Marvel - comics',
    },
  ];

  public heroe: HeroesInterface = {
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    alt_img: '',
    characters: '',
    publisher: Publisher.DCComics,
  };

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {}

  saveHeroe() {
    this._heroesService
      .addHeroe(this.heroe)
      .subscribe((heroe) => console.log(heroe));
  }
}
