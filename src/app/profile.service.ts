import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile =
    {
      name: 'Jeff',
      contactInfo: 'jeff@notanemail.com',
      bio: 'Bearded and bespectacled human being. Dad to twins. Owner of two dogs. Photographer. Coder.'
    };

  constructor() { }

  getUserProfile(): {} {
    return this.profile;
  }
  setUserProfile() {

  }
  editProfile() {

  }
}
