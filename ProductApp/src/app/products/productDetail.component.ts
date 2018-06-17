import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
    templateUrl:'./productDetail.component.html'
})

export class ProductDetailComponent implements OnInit{
    title:string="Product Details"
    name:string;
    description:string;
    img:string;

    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit():void{
        let outPar = +this._route.snapshot.params["id"]
        this.title = `Product Detail>>>>${outPar}`

        this._route
            .queryParams
            .subscribe((params) =>{
                this.name= params['name'];
                this.description= params['desc'];
                this.img = params['image']
            })
    }

    onBack():void{
        this._router.navigate(['/products'])
    }
}


/*
var a = "aditya"
var b = "my name is "+a
        my name is aditya

var b = `my name is ${a}`
*/