import { Component, OnInit } from '@angular/core';
import { HeroesInterface, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public titleView: string = 'Agregar nuevo héroe';

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

  constructor(
    private _heroesService: HeroesService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.ActivatedRoute.params
      .pipe(switchMap(({ id }) => this._heroesService.getHeroeForId(id)))
      .subscribe((heroe) => {
        console.log(heroe.id);
        this.heroe = heroe;
        if (this.heroe.id) {
          this.titleView = 'Actualizar héroe';
        }
      });
    }
  }

  saveHeroe() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
    if (this.heroe.id) {
      console.log('Heroe editado');
      this._heroesService
        .editHeroe(this.heroe)
        .subscribe();
    } else {
      console.log('Heroe agregado');
      this._heroesService
        .addHeroe(this.heroe)
        .subscribe((heroe) =>
          this.router.navigate([`/heroes/editar/${heroe.id}`])
        );
    }
  }
}
