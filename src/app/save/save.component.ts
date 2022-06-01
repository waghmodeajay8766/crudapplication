import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  myform :any;
  constructor(private ser:CrudserviceService,private ab:FormBuilder) { }

  ngOnInit(): void {
    this.myform= this.ab.group({
      name:[''], 
      age:[''],
      empId:[''], 
      branch:[''],
      role:['']
 
    })
  }
  onSubmitForm(){
    console.log(this.myform);
    console.log(this.myform.value);
    this.ser.postdata(this.myform.value).subscribe(
    (res:any)=>{
      console.log(res);
      
    },
    (err:any)=>{
      console.log(err);
    }
  )
  }
}
