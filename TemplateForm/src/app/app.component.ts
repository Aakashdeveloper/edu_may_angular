import {Component} from '@angular/core';
import  {Employee} from './models/employee.model';
import {NgForm} from '@angular/forms';

import {FormPoster} from  './service/form_poster.service'

@Component({
  selector:'app-form',
  templateUrl:'./app.component.html'
})

export class AppComponent{
  language=["NodeJs","AngularJS","ReactJS"]
  model =new Employee("John","a@a.com","12345","Methew",true,"male","NodeJs");
  hasCodeLangError:boolean=false;

  constructor(private _formPoster:FormPoster){}

  firstToUpper(value:string){
    if(value.length>0){
      this.model.firstName = value.charAt(0).toUpperCase()+ value.slice(1)
    }else{
      this.model.firstName = value
    }
  }

  validateCodeLAng(event):void{
    if(this.model.codelang === "default")
      this.hasCodeLangError=true
    else
      this.hasCodeLangError=false
  }

  submitForm(form:NgForm){
    this._formPoster.postEmployeeForm(form.value)
        .subscribe((data)=>console.log('success',data),
          (err)=> console.log('error', err))
    console.log("form"+ JSON.stringify(form.value))
  }
}


/*
ng-pristine ng-touched    ng-valid
ng-dirty    ng-untouched  ng-invalid*/