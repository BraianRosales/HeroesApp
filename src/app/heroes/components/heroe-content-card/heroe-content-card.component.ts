import { Component, Input, OnInit } from '@angular/core';
import { HeroesInterface } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-content-card',
  templateUrl: './heroe-content-card.component.html',
  styleUrls: ['./heroe-content-card.component.css'],
})
export class HeroeContentCardComponent implements OnInit {
  @Input() heroe!: HeroesInterface;

  constructor() {}

  ngOnInit(): void {}
}
