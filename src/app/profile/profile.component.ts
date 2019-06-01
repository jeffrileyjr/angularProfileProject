import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProfileService } from '../profile.service';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }
}
