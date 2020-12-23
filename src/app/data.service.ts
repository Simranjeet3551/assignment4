import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {List}from './list.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  private post:List[]=[];
   private postUpdated = new Subject<String>();
   sendUserData(list:List)
   {
     console.log(list.name);
     this.http
     .post<{message : String}>("http://localhost:3000/api/userData",list)
     .subscribe(responseData =>{
       console.log(responseData,"in HTTp");
       this.post.push(list);
       this.postUpdated.next([...this.post]);

     })
   }
   checkUserData(email:String,password:String):Boolean{
     let check:Boolean=false;
     const loginInfo = [email,password];
     this.http
     .post<({message:Boolean})>("http://localhost:3000/api/userData/"+email+"/"+password,loginInfo)
     .subscribe(post)=>{
       console.log(post.message);
       check = post.message;
       console.log(check);

      })
      console.log(check);
      return check;
      getPostUpdateListener(){
  return this.postUpdated.asObservable();


}
   }
}
