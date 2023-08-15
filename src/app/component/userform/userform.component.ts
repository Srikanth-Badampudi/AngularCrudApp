import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {

  IsEdit:boolean = false;
  
  FormData:FormGroup = new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.minLength(5)]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(5)]),
    designation:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email])
  })

  onSubmit(){
    let FormValues = {};
    console.log('FormData==>',this.FormData)
    console.log('FormValues=>',this.FormData.value);
    
    // let FieldValues = this.FormData.controls.map((Item,index)=>{
      
    // })
    // this.onCreateUser()
   }

   onCreateUser(){}
   onUpdateUser(){}
   onClearForm(){}

}
