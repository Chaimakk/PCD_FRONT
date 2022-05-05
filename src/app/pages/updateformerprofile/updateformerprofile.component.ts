import { FormerAuthService } from './../services/former/former-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateformerprofile',
  templateUrl: './updateformerprofile.component.html',
  styleUrls: ['./updateformerprofile.component.css']
})
export class UpdateformerprofileComponent implements OnInit {

  constructor(public formerAuthService:FormerAuthService) { }

  ngOnInit(): void {
  }

}
