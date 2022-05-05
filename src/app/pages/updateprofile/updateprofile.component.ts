import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentAuthService } from '../services/student/student-auth.service';
import { StudentService } from '../services/student/student.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  updateStudent!:Student;
  constructor(public serviceAuthStudent:StudentAuthService,public servicestudent :StudentService) { }
 

  ngOnInit(): void {
  
  }
 

}
