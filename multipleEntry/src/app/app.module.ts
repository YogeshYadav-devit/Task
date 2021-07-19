import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibModule } from 'projects/my-lib/src/public-api';
import { MyStudentModule } from 'projects/my-student/src/lib/my-student.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibModule,MyStudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
