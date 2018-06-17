import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { NotFoundComponent } from "./shared/notFound.component";
import { OrderComponent } from "./orders/order.component";
import { HomeComponent } from "./home/home.component";
import { ProductModule } from "./products/product.module";

@NgModule({
    //All module will come here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductModule,
        RouterModule.forRoot([
            {path:'orders', component:OrderComponent},
            {path:'home', component:HomeComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**', component:NotFoundComponent},
        ])
    ],
    //All pipes and component come here
    declarations:[
        AppComponent,
        NotFoundComponent,
        OrderComponent,
        HomeComponent
    ],
    //Main Component
    bootstrap:[
        AppComponent
    ],
    //Services will come here
    providers:[]
})

export class AppModule{}


/*json-server

npm install -g json-server

josn-server --watch db.json --port 8900*/
