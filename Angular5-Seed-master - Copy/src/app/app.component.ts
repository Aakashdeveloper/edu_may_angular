import {Component} from '@angular/core'

@Component({
    selector:'app-comp',
    template:`<div>
                <h1>this is main component of edureka</h1>
                <prod-comp></prod-comp>
                <phone-comp></phone-comp>
              </div>`
})

export class AppComponent{

}