import { Pipe, PipeTransform } from '@angular/core';

@Pipe({"name":"yearpipe"})
export class yearpipe implements PipeTransform
{
    transform(givenyear:number,...args:number[]):number {
         var input:number=args[0];
      if(input==0)
      {
          return 0;
      }
      return 2020-input;
    }
    
}