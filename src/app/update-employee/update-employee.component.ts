import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  /*
    Update employe - 
      1.Get employee details from the server using 'id' - getEmployeeById() in service.
      2.Populate the form using the details fetched from 'getEmployeeById()'
      3.Update/Edit the form in the and savec/click it with 'onSave(form)'.
      4.Send new form data after clicking to the server and store new data using 'PUT' method.

  */

  public empType = ['Full Time', 'Intern', 'Extern'];
  public selectOptionError = true;
  public formSubmitted = false;
  public id : number;
  employee : User;

  constructor(private empService : EmployeeServiceService, 
    private activatedRoute : ActivatedRoute,
    private _router : Router) { }

  //Form pre-population on reload init.
  ngOnInit(): void {  
    //extract the 'id' from URL using ActivatedRoute and snapshot.params
    this.id = this.activatedRoute.snapshot.params['id'];
    this.empService.getEmployeeById(this.id).subscribe(
      (data:any) => this.employee = data,
      (error:any) => console.error("Error", error)
    );

  }

  selectOptionValidate(emp_type : any){
    emp_type === 'default' ? this.selectOptionError=true : this.selectOptionError=false;
    console.log("Selected : " + emp_type);
  }

  //When the update form is ubmitted or saved
  onSave(){
    this.empService.UpdateEmployee(this.id, this.employee).subscribe(
      (data:any) => {
        console.log("Data Updated", data);
        this.goToEmployeeList();
      }, 
      (error:any) => console.error("Error", error)
    );
  }

  goToEmployeeList(){
    this._router.navigate(['/employee']);
  }

}
