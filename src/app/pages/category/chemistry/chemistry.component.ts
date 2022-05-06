import { StudentAuthService } from './../../services/student/student-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoursesService } from '../../services/Courses/courses.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-chemistry',
  templateUrl: './chemistry.component.html',
  styleUrls: ['./chemistry.component.css']
})
export class ChemistryComponent implements OnInit {

  
  constructor(private fb:FormBuilder, private coursesservice:CoursesService,private studentAuthService :StudentAuthService) { }
  courses:any;
  category="Chemistry";
  ngOnInit(): void {
    this.coursesservice.getCourseByCategory(this.category).subscribe((data: any)=>this.courses=data);
  }
  
  public isLoggedIn() {
    return this.studentAuthService.isLoggedIn();
  }
/*****************************/
public favorite(id:number){
  this.coursesservice.putFavorite(id).subscribe(
    (response: any) => {
      console.log(id );
     
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  );
}
/***************************/

}
