import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/Courses/courses.service';
import { FormerService } from '../../services/former/former.service';
import { StudentAuthService } from '../../services/student/student-auth.service';

@Component({
  selector: 'app-informatique',
  templateUrl: './informatique.component.html',
  styleUrls: ['./informatique.component.css']
})
export class InformatiqueComponent implements OnInit {

  constructor(public route:Router,private fb:FormBuilder, private coursesservice:CoursesService,private studentAuthService :StudentAuthService,private formerService: FormerService) { }
  courses:any;
  category="Computer Sciencee";
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
public formerEmail:any;
public courseName:any;
public clicklink(Email:String,course:String){
  this.formerEmail=Email;
  this.courseName=course;
  this. route. navigate([`/afficheprofile/${Email}/${course}`]);


}}
