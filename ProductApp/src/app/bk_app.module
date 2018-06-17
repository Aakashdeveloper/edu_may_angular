import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { PhoneComponent } from './phone.component'
import { ProductComponent } from "./products/product.component";
import { ProductUpperPipe } from "./products/produtc-upper.filter";
import { ProductAddPipe } from "./products/product-add.filter";
import { ProductSearchPipe } from "./products/product-search.filter";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";
import { NotFoundComponent } from "./shared/notFound.component";
import { OrderComponent } from "./orders/order.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent } from "./products/productDetail.component";

@NgModule({
    //All module will come here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path:'products', component:ProductComponent},
            {path:'products/:id', component:ProductDetailComponent},
            {path:'orders', component:OrderComponent},
            {path:'home', component:HomeComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**', component:NotFoundComponent},
        ])
    ],
    //All pipes and component come here
    declarations:[
        AppComponent,
        PhoneComponent,
        ProductComponent,
        ProductUpperPipe,
        ProductAddPipe,
        ProductSearchPipe,
        StarComponent,
        NotFoundComponent,
        OrderComponent,
        HomeComponent,
        ProductDetailComponent


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


/*json-server

npm install -g json-server

josn-server --watch db.json --port 8900*/
