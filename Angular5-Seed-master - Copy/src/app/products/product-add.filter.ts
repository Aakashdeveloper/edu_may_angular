import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'AddValue'
})

export class ProductAddPipe implements PipeTransform{
    transform(value:number){
        if(value<20){
            value = value+10
        }
        return value
    }
}