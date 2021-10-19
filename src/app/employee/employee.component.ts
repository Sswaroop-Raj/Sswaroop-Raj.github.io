import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor() {}
  
  //Class instantiating method for single users
  //myUser  = new User(1, 'Swaroop', 'swaroop@gmail.com', 2323232323, 'GET', 'IT', 'Full Time');

  //Form multiple users use class instance array as follows in ngOnInit() method.s


  ngOnInit(): void {
    
  }
}
