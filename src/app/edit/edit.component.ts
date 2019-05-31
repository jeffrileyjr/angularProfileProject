import { Component, OnInit, Input } from "@angular/core";
import { ProfileService } from "../profile.service";
import { Router } from '@angular/router';
import { UserProfile } from '../user-profile';

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
  providers: [ProfileService]
})
export class EditComponent implements OnInit {

  profile: UserProfile;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    console.log(this.profile);
    this.profile = this.profileService.getUserProfile();
  }

  saveProfile(form) {
    let updatedProfile: UserProfile = {
      name: form.value.name,
      contactInfo: form.value.contactInfo,
      bio: form.value.bio
    };
    this.profileService.setUserProfile(updatedProfile);
    console.log(updatedProfile);
    this.router.navigate(['profile']);
  }
}
