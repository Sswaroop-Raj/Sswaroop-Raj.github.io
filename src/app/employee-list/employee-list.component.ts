import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { User } from '../user';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  empList : User[];
  
  constructor(private empService : EmployeeServiceService,
     private _router : Router) {
  } 
  ngOnInit(): void {
    this.empService.showEmployee().subscribe(
      (data:any) => {
        this.empList = data;
        console.log("Show List Success");
      },
      (error:any) => console.error("Error", error)
    )
  }

  //Update button click navigates to 'update-employee' component
  clickedUpdate(id : number){
    this._router.navigateByUrl(`/employee/update-employee/${id}`);
    //this._router.navigate(['update-employee', id])
  }

  //Delete entry using delete button
  clickedDelete(id : number){
    this.empService.deleteEmployeeWithButton(id).subscribe(
      (data:any) => {
        console.log("Succesfully deleted entry", data);
        this._router.navigate(['employee']);
      }),
      (error:any) => console.error(error);
  }

 
}
