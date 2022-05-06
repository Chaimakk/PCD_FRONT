import { Component, OnInit ,ViewChild, OnDestroy, SimpleChanges } from '@angular/core';

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource ,NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { CoursesService } from '../services/Courses/courses.service';
import { FormerAuthService } from '../services/former/former-auth.service';
import { FormerService } from '../services/former/former.service';
declare var jQuery:any;
declare var $:any;
declare interface TableData {
  
  courses: string[][];
}
declare interface TableData1 {
  gouvernorat: string[];
  
  
}
declare interface TableData3 {
  slide: string[];
  courses: string[][];
}
@Component({
  selector: 'app-home-former',
  templateUrl: './home-former.component.html',
  styleUrls: ['./home-former.component.css']
})
export class HomeFormerComponent implements OnInit {
  opened=true;
showFiller = false;
  
showNavigationArrows = false;
showNavigationIndicators = false;
images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

selected = 0;
hovered = 0;
readonly = false;
public tableData1!: TableData;
public tableData2!: TableData1;

foodForm:any;
// @ts-ignore
message=0;
addForm:any;
file!: File;
constructor(config: NgbCarouselConfig,public formerAuthService:FormerAuthService,public formerService:FormerService,private fb:FormBuilder, private courseservice:CoursesService) {
  config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.foodForm=this.fb.group({
      price:[''],
      courseName:[''],
      category:[''],
      description:[''],
      formerName:[''],
      formerEmail:[''],
      picture:[''],
      city:[''],
      phoneNumber:['']
    });

   }

   picture:any;
ngOnInit(): void {
  let loggedEmail: string;
    loggedEmail=localStorage.getItem('loggedEmail')!;
    this.formerService.getPicture(loggedEmail).subscribe((data: any)=>this.picture=data);
  this.tableData2={ gouvernorat: [ 'Ariana', 'Bèja', 'BenArous', 'Bizerte', 'Gabès',
  'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kébili',
  'Le Kef', 'Mahdia', 'La Manouba', 'Médenine', 'Monastir',
  'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse',
  'Tataouine', 'Tozeur', 'Tunis', 'Zaghouane']};
  this.tableData1 = {
   
    courses: [
        ['Français', 'Arabe', 'Dance', 'Yoga','Piano', 'Maths'],
         ['Anglais','Developpent', 'Tennis', 'Allemand', 'Peinture'],
         ['SVT', 'Chimie', 'Phylosophie'],
        
    ]
};
}
region= [
  {'id':1,'name':'Sousse','image':'../../../assets/img/sousse.jpg'},
  {'id':2,'name':'Monastir','image':'../../../assets/img/monastir.jpg'},
  {'id':3,'name':'Sfax','image':'../../../assets/img/sfax.jpg'},
  ]
course= [
  [{'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/angular.jpg','linkpage':'allprof'},
  {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/typescript.jpg','linkpage':'allprof'},
  {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
  {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/reactjs.jpg','linkpage':'allprof'},
],
  [{'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
  {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
  {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
  {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
]
]
paused = false;
unpauseOnArrow = false;
pauseOnIndicator = false;
pauseOnHover = true;
pauseOnFocus = true;

@ViewChild('carousel', { static: true })
carousel!: NgbCarousel;

togglePaused() {
  if (this.paused) {
    this.carousel.cycle();
  } else {
    this.carousel.pause();
  }
  this.paused = !this.paused;
}

onSlide(slideEvent: NgbSlideEvent) {
  if (this.unpauseOnArrow && slideEvent.paused &&
    (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
    this.togglePaused();
  }
  if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
    this.togglePaused();
  }
}



  
toggleSidebar(){
  this.opened=!this.opened;
}
public isLoggedInF() {
  return this.formerAuthService.isLoggedInF();
}

 /***************courses*************** */

  fnChange({event}: { event: any })
  {
    this.file=event.target.files[0];
    console.log(this.file.name);
    console.log(this.file.size);
  }

  fnAdd()
  {
    this.message=1;
    var fd=new FormData();
    // alert(this.foodForm.controls['expiryDate'].value);
    fd.append("price",this.foodForm.controls['price'].value);
    fd.append("courseName",this.foodForm.controls['courseName'].value);
    fd.append("category",this.foodForm.controls['category'].value);
    fd.append("description",this.foodForm.controls['description'].value);
    fd.append("formerName",this.foodForm.controls['formerName'].value);
    fd.append("formerEmail",this.foodForm.controls['formerEmail'].value);
    fd.append("city",this.foodForm.controls['city'].value);
    fd.append("phoneNumber",this.foodForm.controls['phoneNumber'].value);
    fd.append("picture",this.file,this.file.name);

    this.courseservice.addCourse(fd).subscribe((data: any)=>console.log(data));

  }
  public onOpenModal( mode: string): void {
    
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    
    button.click();
  }


  
}