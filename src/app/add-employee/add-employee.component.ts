import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EmployeeServiceService } from '../employee-service.service';
import { analyze } from 'eslint-scope';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  constructor(private empService : EmployeeServiceService) { 
    
  }

  ngOnInit(): void {
  }
  
  public empType = ['Full Time', 'Intern', 'Extern'];
  public selectOptionError = true;
  public formSubmitted = false;
  
  selectOptionValidate(emp_type : any){
    emp_type === 'default' ? this.selectOptionError=true : this.selectOptionError=false;
    console.log("Selected : " + emp_type);
  }

  onSubmit(myForm : any){
    //Generate a new 'id' for each user
    let ID = Math.floor(Date.now() * Math.random());
    let newUser = {
      id : ID,
      name : myForm.value.name,
      email : myForm.value.email,
      phone : myForm.value.phone, 
      designation : myForm.value.designation,
      department : myForm.value.department,
      empType : myForm.value.emp
    }
    console.log(newUser);
    this.empService.addEmployee(newUser).subscribe(
      (data : any) => console.log("Success", data),
      (error : any) => console.error("Error", error)
    );

    this.formSubmitted = true;
    this.setDefault(myForm);
  }
  //Resets the form after submission
  setDefault(form : any){
   //this.formSubmitted = false;
   form.reset();
  }




}
