import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkEditar',
})
export class LinkEditarPipe implements PipeTransform {
  transform(heroe: string | undefined): string {
    return `/heroes/editar/${heroe}`;
  }
}
