import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile = {
    name: "Jeff",
    contactInfo: "jeff@notanemail.com",
    bio:
      "Bearded and bespectacled human being. Dad to twins. Owner of two dogs. Photographer. Coder."
  };
  constructor(private router: Router) { }

  getUserProfile() {
    return this.profile;
  } 
  
  editProfile(updatedProfile: any): void {
    this.profile = updatedProfile;
    this.router.navigate(['/profile']);
  }

}