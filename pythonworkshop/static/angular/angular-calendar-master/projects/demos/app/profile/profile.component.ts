import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { PythUser } from '../demo-app.component';

@Component({
  selector: 'mwl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor(private tokenStorage: TokenStorageService) { }

  user : PythUser = {
    id : 0, 
  user_email : '',
  user_pass_hash : '',
  user_is_logged_in : '',
  user_confirmed : '',
  last_seen : '',
  is_admin : ''
  };

  ngOnInit(): void {
    this.tokenStorage.getUser();
  }

}
