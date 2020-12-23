import { Component, OnInit } from '@angular/core';
import { NgForm , NgModel} from '@angular/forms';
import { Router, Data } from '@angular/router';
import { List} from '../list.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
name:string;
phone:string;
email:string;
password:string;
  constructor(public route:Router,public service:Data) { }

  ngOnInit():void {
  }
formData(form:NgForm)
{
if(form.invalid)
{
  return;
}
this.name=form.value.name;
this.phone=form.value.phone;
this.email=form.value.email;
this.password=form.value.password;
console.log("the data is",this.name);

const post:List={id:null,name:this.name,phone:this.phone,email:this.email,password:this.password};
console.log(post);
this.service.sendUserData(post);

this.route.navigate(['']);
}
}