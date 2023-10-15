import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  // private clientId = '684184780318629';
  // private redirectUri = 'https://aniakubow.com/';
  // private url='https://api.instagram.com/oauth/authorize?'

  // initiateAuth() {
  //   const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}
  //   &response_type=token&scope=user_profile,user_media`;
  //   return axios.get(authUrl);

    
    // window.location.href = authUrl;
    // const authUrl=this.url+"client_id="+this.clientId+"&redirect_uri="+this.redirectUri+"=user_profileCuser_media&logger_id=ccd4ac6e-3964-4458-9336-4b383a2f8bd0"
 // }

  // getUserFeed(accessToken: string) {
  //   const apiUrl = `https://graph.instagram.com/v12.0/me/media?
  //   fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`;
  //   return axios.get(apiUrl);
  // }
}
  