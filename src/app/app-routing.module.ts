
import { MusicComponent } from './pages/category/music/music.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { AdminComponent } from './pages/admin/admin.component';
//import { StudentGuard } from './pages/guard/student.guard';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { StudenthomeComponent } from './pages/studenthome/studenthome.component';
import { LoginstudentComponent } from './pages/loginstudent/loginstudent.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcenterComponent } from './pages/allcenter/allcenter.component';
import { AboutComponent } from './pages/about/about.component';
import { AllprofComponent } from './pages/allprof/allprof.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegistercenterComponent } from './pages/registercenter/registercenter.component';
import { RegisterformerComponent } from './pages/registerformer/registerformer.component';
import { RegisterstudentComponent } from './pages/registerstudent/registerstudent.component';
import { ThirdofComponent } from './pages/thirdof/thirdof.component';
import { AuthGuard } from './pages/_auth/auth.guard';
import { UserComponent } from './pages/user/user.component';
import { HomeFormerComponent } from './pages/home-former/home-former.component';

import { StudentprofileComponent } from './pages/studentprofile/studentprofile.component';
import { BillingComponent } from './pages/billing/billing.component';
import { UpdateprofileComponent } from './pages/updateprofile/updateprofile.component';
import { MessagesFormerComponent } from './pages/messages-former/messages-former.component';
import { FavoritesFormerComponent } from './pages/favorites-former/favorites-former.component';
import { PlanningFormerComponent } from './pages/planning-former/planning-former.component';
import { FormerprofileComponent } from './pages/formerprofile/formerprofile.component';
import { UpdateformerprofileComponent } from './pages/updateformerprofile/updateformerprofile.component';
import { BillingFormerComponent } from './pages/billing-former/billing-former.component';
import { FormerChatComponent } from './pages/former-chat/former-chat.component';
import { HomeCenterComponent } from './pages/home-center/home-center.component';
import { ImageComponent } from './pages/image/image.component';
import { MycoursesComponent } from './pages/mycourses/mycourses.component';
import { InformatiqueComponent } from './pages/category/informatique/informatique.component';
import { MathematiqueComponent } from './pages/category/mathematique/mathematique.component';
import { AllstudentComponent } from './pages/allstudenttable/allstudent.component';
import { AllformertableComponent } from './pages/allformertable/allformertable.component';
import { AllcentertableComponent } from './pages/allcentertable/allcentertable.component';
import { AlladmintableComponent } from './pages/alladmintable/alladmintable.component';
import { ChemistryComponent } from './pages/category/chemistry/chemistry.component';
import { DanceComponent } from './pages/category/dance/dance.component';
import { LanguageComponent } from './pages/category/language/language.component';
import { PhysiquesComponent } from './pages/category/physiques/physiques.component';
import { SportsComponent } from './pages/category/sports/sports.component';
import { HomeStudentComponent } from './pages/home-student/home-student.component';


const routes: Routes = [{path:"",component:HomeComponent   },
{path:"home",component:HomeComponent   },
{path:"login",component:LoginComponent   },
{path:"about",component:AboutComponent   },
{path:"register",component:RegisterComponent   },
{path:"contact",component:ContactComponent  },
{path:"courses",component:CoursesComponent  },
{path:"home/courses",component:CoursesComponent},
{path:"home/register",component:RegisterComponent},
{path:"thirdof",component:ThirdofComponent},
{path:"home/thirdof",component:ThirdofComponent},
{path:"thirdof/registerstudent",component:RegisterstudentComponent},
{path:"thirdof/registerformer",component:RegisterformerComponent},
{path:"thirdof/registercenter",component:RegistercenterComponent},
{path:"courses/allprof",component:AllprofComponent},
{path:"home/courses/allprof",component:AllprofComponent},
{path:"allcenter",component:AllcenterComponent },
{path:"loginstudent", component:StudenthomeComponent},
{ path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
{ path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['Student']} },
{ path: 'studentprofile', component: StudentprofileComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{ path: 'billing', component: BillingComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{ path: 'messages', component: MessagesComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{ path: 'updateprofile', component: UpdateprofileComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{path:"home-student/billing",component:BillingComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },
{path:"studentprofile/updateprofile",component:UpdateprofileComponent,  canActivate:[AuthGuard], data:{roles:['Student']} },

{ path: 'home-center', component: HomeCenterComponent ,  canActivate:[AuthGuard], data:{roles:['Center']} },
{ path: 'home-student', component: HomeStudentComponent ,  canActivate:[AuthGuard], data:{roles:['Student']} },

{path: "forbidden", component: ForbiddenComponent},
{path: "login", component: LoginComponent},
{ path: 'admin', component: AdminComponent ,  canActivate:[AuthGuard], data:{roles:['Admin']} },
{ path: 'studenthome', component: StudenthomeComponent },
{path:"home-former", component:HomeFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"home-former/messages-former", component:MessagesFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"home-former/favorites-former", component:FavoritesFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"home-former/planning-former", component:PlanningFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"formerprofile", component:FormerprofileComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"updateformerprofile", component:UpdateformerprofileComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"home-former/billing-former", component:BillingFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"billing-former", component:BillingFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"messages-former", component:MessagesFormerComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"formerprofile/updateformerprofile", component:UpdateformerprofileComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },

{path:"former-chat", component:FormerChatComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },
{path:"mycourses", component:MycoursesComponent,  canActivate:[AuthGuard], data:{roles:['Former']} },

{ path: 'informatique', component: InformatiqueComponent},
{path:"courses/informatique", component:InformatiqueComponent},
{ path: 'mathematique', component: MathematiqueComponent},
{ path: 'courses/mathematique', component: MathematiqueComponent},
{path:"courses/chemistry", component:ChemistryComponent},
{path:"chemistry", component:ChemistryComponent},
{path:"courses/dance", component:DanceComponent},
{path:"dance", component:DanceComponent},
{path:"courses/language", component:LanguageComponent},

{path:"language", component:LanguageComponent},
{path:"courses/language", component:LanguageComponent},
{path:"physiques", component:PhysiquesComponent},
{path:"sports", component:SportsComponent},

{path:"courses/physiques", component:PhysiquesComponent},
{path:"courses/sports", component:SportsComponent},
{path:"courses/music", component:MusicComponent},
{path:"music", component:MusicComponent},


{ path: 'image', component: ImageComponent},
{ path: 'admin/allstudenttable', component: AllstudentComponent},
{ path: 'admin/allformertable', component: AllformertableComponent},
{ path: 'admin/allcentertable', component: AllcentertableComponent},
{ path: 'admin/alladmintable', component: AlladmintableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
