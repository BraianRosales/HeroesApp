import { Component, Input, OnInit } from '@angular/core';
import { HeroesInterface } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css'],
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe!: HeroesInterface;

  constructor() {}

  ngOnInit(): void {}
}
