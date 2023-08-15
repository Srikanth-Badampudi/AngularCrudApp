import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

declare var window:any;

@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent {
  constructor(private crud:CrudService){}

  contactsData:any = []
  formModel:any;
  
  fetchAllUsers(){
    this.crud.getAllUsers().subscribe((res)=>{
      this.crud.data = res
      this.contactsData = res
    });
  }


  
 ngOnInit():void{
  console.log('data-table rendered')
  this.fetchAllUsers()
  this.formModel = new window.bootstrap.Modal(
    document.getElementById('staticBackdrop')
  )
}

onGetUser(){}

onDeleteUser(){}

onDisplayUser(){
  this.formModel.show();
}
}
