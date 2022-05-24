import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkLeerMas',
})
export class LinkPipe implements PipeTransform {
  transform(heroeId: string | undefined): string {
    return `/heroes/${heroeId}`;
  }
}
