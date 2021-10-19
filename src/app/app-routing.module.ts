import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { EmployeeComponent } from './employee/employee.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
//Just added the routing path adn component do the rest roun=ting later....
const routes: Routes = [

  // Default route at the begining
  {path : '', redirectTo : 'home', pathMatch : 'full'},

  {
    path : 'employee', component : EmployeeComponent,
    children : [
      //Default route for child components
      {path : '', redirectTo : 'employee-list', pathMatch : 'full'},

      {path : 'employee-list', component : EmployeeListComponent},
      {path : 'add-employee', component : AddEmployeeComponent},
      {path : 'update-employee/:id', component : UpdateEmployeeComponent}
      //Add DeleteEmployeeComponent
    ]
  },
  {path : 'home', component : HomeBodyComponent},
  //Error route redirected to Home Page
  {path : '**', component : HomeBodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
