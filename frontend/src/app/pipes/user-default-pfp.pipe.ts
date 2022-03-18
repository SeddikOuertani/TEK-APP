import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userDefaultPfp'
})
export class UserDefaultPfpPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
