import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  //FormData = {id:null,firstname:'',lastname:'',Designation:'',email:''}

  

  constructor(private crud:CrudService){}
  
  contactsData:any= []

  fetchAllUsers(){
    this.crud.getAllUsers().subscribe((res)=>{
      console.log(res)
      this.contactsData=res
    });
  }
  
 ngOnInit():void{
  console.log('data-table rendered')
  this.fetchAllUsers()
}



 onUpdateUser(){
  // this.crud.updateUser(this.FormData.id,this.FormData).subscribe((res)=>{
  //   this.onClearForm()
  //   this.fetchAllUsers()
  // });
 }


 onCreateUser(){
  // this.crud.addUser(this.FormData).subscribe((res)=>{
  //   this.onClearForm()
  //   this.fetchAllUsers()
  // });
 }

 onDeleteUser(id:number){
  // this.crud.deleteUser(id).subscribe((res)=>{
  //   this.fetchAllUsers()
  // });
 }

 onGetUser(user:any){
  // this.crud.getUser(user.id).subscribe((res)=>{
  //   this.FormData = user;
  //   this.IsEdit = !this.IsEdit;
  //   console.log('getUser',this.FormData)
  // });
 }

 onClearForm(){
  // this.IsEdit = !this.IsEdit
  // return this.FormData = {id:null,firstname:'',lastname:'',Designation:'',email:''}
  
 }



}
