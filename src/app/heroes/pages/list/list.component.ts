import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroesInterface } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}

  public lsHeroes: HeroesInterface[] = [];

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((res) => {
      this.lsHeroes = res;
    });
  }
}
