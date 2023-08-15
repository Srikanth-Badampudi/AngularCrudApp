import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormModel } from '../model/task';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  data:any = []
  ModelActive:boolean = false;
  

  serviceURL:string = '';
  constructor(private http: HttpClient) {
    this.serviceURL="http://localhost:3000/contacts";
   }

   addUser(body:object){
    return this.http.post(this.serviceURL,body);
   }

   getAllUsers(){
    return this.http.get(this.serviceURL)
   }

   getUser(id:any){
    return this.http.get(this.serviceURL+'/'+id);
   }

   updateUser(id:any,user:any){
    return this.http.put(this.serviceURL+'/'+id,user);
   }

   deleteUser(id:any){
    return this.http.delete(this.serviceURL+'/'+id);
   }

}
