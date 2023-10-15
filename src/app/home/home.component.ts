import { Component } from '@angular/core';
//import { InstagramService } from '../services/instagramservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}

  // connectInstagram() {
  //   this.instagramService.initiateAuth()

  // }
  redirectToInstagram() {
    const clientId = '1081014703257225';
    const redirectUri = 'https://aniakubow.com/';

    const instagramAuthUrl = `https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

    window.location.href = instagramAuthUrl;
  }
}
