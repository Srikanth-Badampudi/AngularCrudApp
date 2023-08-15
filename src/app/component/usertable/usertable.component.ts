import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent {
  constructor(private crud:CrudService){}

  contactsData:any = []
  
  fetchAllUsers(){
    this.crud.getAllUsers().subscribe((res)=>{
      this.crud.data = res
      this.contactsData = res
    });
  }


  
 ngOnInit():void{
  console.log('data-table rendered')
  this.fetchAllUsers()
}

onGetUser(){}

onDeleteUser(){}

onDisplayUser(){
  const modelDiv = document.getElementById('detailsModel');
  if(modelDiv!=null){
    modelDiv.style.display='block'
  }
  this.crud.ModelActive = true
  console.log('called onDisplayUser')
}
}
