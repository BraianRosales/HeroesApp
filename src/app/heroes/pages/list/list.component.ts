import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroesInterface } from '../../interfaces/heroes.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  constructor(private heroesService: HeroesService) {}

  
  public lsHeroes: HeroesInterface[] = [];
  suscription!: Subscription;

  ngOnInit(): void {
    this.getHeroes();
    this.suscription = this.heroesService.refresh$.subscribe(() => {
      this.getHeroes();
    });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
    console.log('ngOnDestroy: Observable cerrado.');
  }

  getHeroes(): void {
    this.heroesService.getHeroes().subscribe((res) => {
      this.lsHeroes = res;
    });
  }
}
