import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ ProfileService ]
})
export class EditComponent implements OnInit {

  profile: {};

  constructor(private profileService: ProfileService) {
  this.profile = this.profileService.getUserProfile();
  }
  ngOnInit() {
    console.log(this.profile);
    this.profile = this.profileService.getUserProfile();
  }

  saveProfile(form) {
    
  }
}
