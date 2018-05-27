import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PhoneComponent} from './phone.component'
import { ProductComponent } from "./products/product.component";

@NgModule({
    //All module will come here
    imports:[
        BrowserModule,
        FormsModule
    ],
    //All pipes and component come here
    declarations:[
        AppComponent,
        PhoneComponent,
        ProductComponent
    ],
    //Main Component
    bootstrap:[
        AppComponent
    ],
    //Services will come here
    providers:[

    ]
})

export class AppModule{}