import { CoursesService } from './../services/Courses/courses.service';
import { FormerService } from './../services/former/former.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-affiche-profile',
  templateUrl: './affiche-profile.component.html',
  styleUrls: ['./affiche-profile.component.css']
})
export class AfficheProfileComponent implements OnInit {
infosU:any;
infosC:any;
picture:any;
  user!:{formerEmail:string; courseName:string};
  constructor(private route:ActivatedRoute,private formerService:FormerService,private courseService:CoursesService){}
  public Email=this.route.snapshot.params['formerEmail'];
  public CourseName=this.route.snapshot.params['courseName'];
  ngOnInit(): void {
    this.user={
      formerEmail: this.route.snapshot.params['formerEmail'],
      courseName: this.route.snapshot.params['courseName'],

    }
    this.formerService.getUsersByEmail(this.Email).subscribe((data: any)=>this.infosU=data);
    this.courseService.findByFormerANDCourseName(this.CourseName,this.Email).subscribe((data: any)=>this.infosC=data);
    this.formerService.getPicture(this.Email).subscribe((data: any)=>this.picture=data);
  }

}
