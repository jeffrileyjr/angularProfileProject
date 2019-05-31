import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../user-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: UserProfile;

  constructor(private profileService: ProfileService) {
    this.profile = this.profileService.getUserProfile();
    console.log(this.profile);
   }



  ngOnInit() {
  }
  editProfile() {
    this.profileService.editProfile();
  }

}
