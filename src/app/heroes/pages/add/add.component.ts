import { Component, OnInit } from '@angular/core';
import { HeroesInterface, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';

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
    {
      name: 'Akira toriyama',
      desc: 'Toei Animation',
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
          this.heroe = heroe;
        });
    }
  }

  saveHeroe() {
    if (
      this.heroe.superhero.trim().length === 0 &&
      this.heroe.alt_img!.trim().length === 0
    ) {
      return;
    }
    if (this.heroe.id) {
      console.log('Heroe actualizado');
      this._heroesService.editHeroe(this.heroe).subscribe();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'success',
        title: 'Héroe actualizado!',
        background: 'white',
        color: 'green',
      });
    } else {
      console.log('Heroe agregado');
      this._heroesService.addHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate([`/heroes/editar/${heroe.id}`]);
        // alerta
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Héroe agregado!',
          background: 'white',
          color: 'green',
        });
      });
    }
  }
}
