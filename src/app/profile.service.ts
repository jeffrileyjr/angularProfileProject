import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   profile: UserProfile = {
      name: 'Jeff',
      contactInfo: 'jeff@notanemail.com',
      bio: 'Bearded and bespectacled human being. Dad to twins. Owner of two dogs. Photographer. Coder.'
    };

  constructor(private router: Router) { }

  getUserProfile(): UserProfile {
    return this.profile;
  }

  setUserProfile(updatedProfile: UserProfile): UserProfile {
    this.profile = updatedProfile;
    console.log(this.profile);
    console.log(updatedProfile);
    return this.profile;
  }
  editProfile(): void {
    this.router.navigate(['edit-profile']);
  }
}
