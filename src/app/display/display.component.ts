import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudserviceService } from '../crudservice.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
public empData:any;
  constructor(private dataShare:CrudserviceService,private rt:Router ) { }

  ngOnInit(): void {
    this.dataShare.getData().subscribe((res:any)=>{
      console.log(res);
      this.empData= res;
    })
   }
   postdata(){
     this.rt.navigate(['save'])
   }
   onEdit(id:any,data:any){
     this.dataShare.setdata(id,data);
     this.rt.navigate(['edit'])
   }
    onDelete(id:any){
   this.dataShare.deletedata(id).subscribe(
   (res:any)=>{
   console.log(res);
  }
)
  }
}
