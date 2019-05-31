import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ ProfileService ]
})
export class ProfileComponent implements OnInit {

  profile: {};

  constructor(private profileService: ProfileService) {
    this.profile = profileService.getUserProfile();
    console.log(this.profile);
   }



  ngOnInit() {
  }

}
