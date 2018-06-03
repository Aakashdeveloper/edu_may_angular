import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service'

@Component({
    selector:'prod-comp',
    templateUrl:'./product.component.html',
    //styles:['thead{color:green}','h3{color:blue}']
    styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit{
    title:string="@@@@@@@Product List";
    showTable:boolean=false;
    showImage:boolean=false;
    imageWidth:number=50;
    filterText:string;
    errorMessage:string;
    products:IProduct[]

    constructor(private _productService:ProductService){}

    toggleImage():void{
        this.showImage = !this.showImage
    }

    onDataRecive(message:string):void{
        this.title = "Product list>>>>>"+message
    }

    ngOnInit():void{
        this._productService.getProducts()
            .subscribe((data)=> this.products = data,
                (err) => this.errorMessage = <any>err)
    }
}


/*

A coding pattern in which a class receives the instance of object
it needs from an external source rather than creating itself

string=""
number = 1,2
boolean = true/false


One Way
--Data Binding {{}}
--Property  []
--Event     ()
Two Way     [()]

function add(a,b){
    return a+b
}

var add = (a,b) => return a+b


*/