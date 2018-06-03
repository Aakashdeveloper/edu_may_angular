import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IProduct } from './product.model';

@Injectable()

export class ProductService{

    private _productUrl = "https://ngapi4.herokuapp.com/api/getProducts";

    constructor(private http:Http){}

    getProducts():Observable<IProduct[]>{
        return this.http.get(this._productUrl)
                .map((response) => <IProduct[]>response.json())
                .catch(this.handleError)
    }

    private handleError(error:Response){
        return Observable.throw(error.json().error || "Server Error")
    }
}

/*
MEAN
*/