import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoursesService } from '../../services/Courses/courses.service';

@Component({
  selector: 'app-physiques',
  templateUrl: './physiques.component.html',
  styleUrls: ['./physiques.component.css']
})
export class PhysiquesComponent implements OnInit {

  constructor(private fb:FormBuilder, private coursesservice:CoursesService) { }
  courses:any;
  category="Physics";
  ngOnInit(): void {
    this.coursesservice.getCourseByCategory(this.category).subscribe((data: any)=>this.courses=data);
  }

}
