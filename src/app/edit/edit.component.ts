import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';



@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  profile: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }

  setUserProfile(updatedProfile) {
    this.profileService.editProfile(updatedProfile);
  }

}
