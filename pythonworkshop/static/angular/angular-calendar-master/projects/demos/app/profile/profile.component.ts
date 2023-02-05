import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';
import { PythUser } from '../demo-app.component';

@Component({
  selector: 'mwl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  resetpassmodel : any = {
    oldpassword : '',
    newpassword : ''
  }

  isPassReset = false;
  isPassResetFailed = false;
  errorMessage = '';

  constructor(private tokenStorage: TokenStorageService, private authService: AuthService) { }

  user : PythUser = {
    id : 0, 
  user_email : '',
  user_pass_hash : '',
  user_is_logged_in : '',
  user_confirmed : '',
  access_token: '',
  last_seen : '',
  is_admin : ''
  };

  ngOnInit(): void {
    this.user=this.tokenStorage.getUser();
  }

  onSubmit(): void {
    const { oldpassword, newpassword } = this.resetpassmodel;

    this.authService.resetPass(this.user.user_email,oldpassword, newpassword).subscribe({
      next: (data) => {
        let dataObj = data as any;
        //console.log("loginComp dataObj.user:",dataObj.user)
        if (dataObj.user!== 'nonexistent'){
          let accessToken : string= dataObj.user.access_token ;
          this.tokenStorage.saveToken(accessToken);
          this.tokenStorage.saveUser(dataObj.user);
          this.isPassResetFailed = false;
          this.isPassReset = true;
          this.tokenStorage.authenticated$.next(true);
          //this.reloadPage();
        } else if(dataObj.user === 'nonexistent'){
          this.errorMessage = "Wrong username or password!";
          this.isPassResetFailed = true;
        }

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isPassResetFailed = true;
      }
    }
    );
  }

}
