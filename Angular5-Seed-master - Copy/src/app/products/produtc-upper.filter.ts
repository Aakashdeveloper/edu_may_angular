import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'productUpper'
})

export class ProductUpperPipe implements PipeTransform{

    transform(value:string, typeReq:string){
        if(value.length>0){
            if(typeReq == "upper"){
                value = value.toUpperCase()
            }else{
                 value = value.toLowerCase()
            }
            
        }
        return value
    }
}