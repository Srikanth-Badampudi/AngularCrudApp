import { Component,OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit{
  IsModelActive:boolean = this.crud.ModelActive;
  displayStyle:string = "none";
  
  constructor(private crud:CrudService){}

  onModelOpen(){
    this.displayStyle = "block";
  }

  onModelClose(){
    this.displayStyle = "none";
    this.IsModelActive = false
  }

  ngOnInit(): void {
    if(this.IsModelActive){
      this.onModelOpen()
    }else{
      this.onModelClose()
    }
  }
  

}
