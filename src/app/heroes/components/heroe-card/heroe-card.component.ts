import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { HeroesInterface } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css'],
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe!: HeroesInterface;

  constructor(private HeroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {}

  deleteHeroe() {
    Swal.fire({
      background: 'slategrey',
      color: 'white',
      title: '¿Estás segur@?',
      text: 'Perdera el héroe en su base de datos.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'black',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar héroe!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.HeroesService.removeHeroe(this.heroe).subscribe();
        Swal.fire({
          background: 'black',
          color: 'white',
          title: 'Héroe eliminado',
          icon: 'success',
        });
      }
    });
  }
}
