import { Pipe, PipeTransform } from '@angular/core';
import { HeroesInterface } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image',
  pure: false,
})
export class ImagePipe implements PipeTransform {
  transform(heroe: HeroesInterface): string {
    if (!heroe.id && !heroe.alt_img) {
      return `assets/no-image.png`;
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    } else {
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }
}
