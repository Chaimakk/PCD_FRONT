import { CentercoursesService } from './../services/centerCourses/centercourses.service';
import { Component, OnInit ,ViewChild, OnDestroy, SimpleChanges } from '@angular/core';

import { CenterAuthService } from '../services/center/center-auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-center',
  templateUrl: './home-center.component.html',
  styleUrls: ['./home-center.component.css']
})
export class HomeCenterComponent implements OnInit {
  courseForm:any;
  message=0;
  constructor(public centerAuthService:CenterAuthService,private fb:FormBuilder ,public centercoursesService:CentercoursesService) {
    this.courseForm=this.fb.group({
      price:[''],
      courseName:[''],
      centerName:[''],
      category:[''],
      description:[''],
      formerName:[''],
      centerEmail:[''],
     
      city:[''],
      phoneNumber:['']
    });
   }

  ngOnInit(): void {
  }

  fnAdd()
  {
    this.message=1;
    var fd=new FormData();

    fd.append("price",this.courseForm.controls['price'].value);
    fd.append("courseName",this.courseForm.controls['courseName'].value);
    fd.append("centerName",this.courseForm.controls['centerName'].value);
    fd.append("category",this.courseForm.controls['category'].value);
    fd.append("description",this.courseForm.controls['description'].value);
    fd.append("formerName",this.courseForm.controls['formerName'].value);
    fd.append("centerEmail",this.courseForm.controls['centerEmail'].value);
    fd.append("city",this.courseForm.controls['city'].value);
    fd.append("phoneNumber",this.courseForm.controls['phoneNumber'].value);


    this.centercoursesService.addCenterCourse(fd).subscribe((data: any)=>console.log(data));

  }


}
