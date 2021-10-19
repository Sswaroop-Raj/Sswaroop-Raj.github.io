import { Injectable } from '@angular/core';
import { UserTemplate } from './user-template';
import { User } from '../app/user';

import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';

// import {  catchError } from 'rxjs/operator/catch';
// import {  _throw as throwError } from 'rxjs/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url = 'http://localhost:3000/employees'; 


  //Get the employee by 'id passed from clicking the update button.
  getEmployeeById(id :number) : Observable<UserTemplate>{
    return this.http.get<UserTemplate>(`${this.url}/${id}`);
  }
  //takes a parameter of employee and adds it to the json-server
  addEmployee(user : User) : Observable<UserTemplate>{
    return this.http.post<UserTemplate>(this.url, user)
    //return this.http.post<UserTemplate>(this.url, user).pipe(catchError(this.errorHandler));
  }

  //Show all the employees in the 'employee-list' component
  showEmployee() : Observable<UserTemplate>{
    return this.http.get<UserTemplate>(this.url);
  }
  
  //Takes 'id', 'emloyee' as parameter
  UpdateEmployee(id:number, emp:UserTemplate) : Observable<UserTemplate>{
    return this.http.put<UserTemplate>(`${this.url}/${id}`, emp);
  }

  //Takes 'id' as parameter
  deleteEmployeeWithButton(id:number) : Observable<UserTemplate>{
    return this.http.delete<UserTemplate>(`${this.url}/${id}`);
  }


  // errorHandler(error : HttpErrorResponse){
  //   return throwError(error.message || "Error detected!");

  // }

  constructor(private http : HttpClient) { }
}
