import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ProductComponent } from "./product.component";
import { ProductUpperPipe } from "./produtc-upper.filter";
import { ProductAddPipe } from "./product-add.filter";
import { ProductSearchPipe } from "./product-search.filter";
import { ProductDetailComponent } from "./productDetail.component";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products', component:ProductComponent},
            {path:'products/:id', component:ProductDetailComponent}
        ])
    ],
    declarations:[
        ProductComponent,
        ProductUpperPipe,
        ProductAddPipe,
        ProductSearchPipe,
        ProductDetailComponent
    ],
    providers:[
        ProductService
    ]
})

export class ProductModule{}