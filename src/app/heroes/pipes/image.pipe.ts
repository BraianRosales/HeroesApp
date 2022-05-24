import { Pipe, PipeTransform } from '@angular/core';
import { HeroesInterface } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(heroe: HeroesInterface): string {
    return `assets/heroes/${heroe.id}.jpg`;
  }
}
