import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoursesService } from '../../services/Courses/courses.service';

@Component({
  selector: 'app-mathematique',
  templateUrl: './mathematique.component.html',
  styleUrls: ['./mathematique.component.css']
})
export class MathematiqueComponent implements OnInit {

  constructor(private fb:FormBuilder, private coursesservice:CoursesService) { }
  courses:any;
category="Mathématique";
  ngOnInit(): void {
    this.coursesservice.getCourseByCategory(this.category).subscribe((data: any)=>this.courses=data);
  }

}
