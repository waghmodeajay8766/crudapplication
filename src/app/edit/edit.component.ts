import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public home:any;
  public myform:any;
  public empdata:any;
  constructor(private http:CrudserviceService,private abc:Router,private a:FormBuilder) {
    this.http.getnewdata().subscribe(
      (res)=>{
        console.log(res);
        this.home=res; 
        console.log(this.home.name)
      }
    )
   }

  ngOnInit(): void {
    this.myform=this.a.group(
      {
        name:[this.home.name],
        age:[this.home.age],
        empId:[this.home.empId],
      branch:[this.home.branch],
      role:[this.home.role]
      }
    )
  }
  onSubmitForm(){
    this.http.editdata(this.home.id,this.myform.value).subscribe(
      (res)=>{
        console.log(res);
        this.empdata=res;
      }
    )
    console.log(this.myform);
    this.abc.navigate(['display']);
  }

}
