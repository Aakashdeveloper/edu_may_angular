import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { PhoneComponent } from './phone.component'
import { ProductComponent } from "./products/product.component";
import { ProductUpperPipe } from "./products/produtc-upper.filter";
import { ProductAddPipe } from "./products/product-add.filter";
import { ProductSearchPipe } from "./products/product-search.filter";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";

@NgModule({
    //All module will come here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    //All pipes and component come here
    declarations:[
        AppComponent,
        PhoneComponent,
        ProductComponent,
        ProductUpperPipe,
        ProductAddPipe,
        ProductSearchPipe,
        StarComponent

    ],
    //Main Component
    bootstrap:[
        AppComponent
    ],
    //Services will come here
    providers:[
        ProductService
    ]
})

export class AppModule{}