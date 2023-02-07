import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';
import { PythUser } from '../demo-app.component';
import { UntypedFormControl,Validators ,FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'mwl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  changepassmodel : any = {
    oldpassword : '',
    newpassword : ''
  }


  isPassReset = false;
  isPassResetFailed = false;
  errorMessage = '';

  emailFormControl = new UntypedFormControl('',[Validators.required, Validators.email,Validators.minLength(5)]);
  emailPassFormControl = new UntypedFormControl('',[Validators.required,Validators.minLength(6)])
  matcher = new MyErrorStateMatcher();

  oldPassFormControl = new UntypedFormControl('',[Validators.required,Validators.minLength(6)]);
  newPassFormControl = new UntypedFormControl('',[Validators.required,Validators.minLength(6)]);

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

  changeEmail(newEmail: string, oldPass: string){
    this.authService.changeEmail(newEmail,oldPass).subscribe({
      next: (respObj)=>{
        
      }
    })
  }

  changePass(): void {
    const { oldpassword, newpassword } = this.changepassmodel;

    this.authService.changePass(this.user.user_email,oldpassword, newpassword).subscribe({
      next: (data) => {
        let dataObj = data as any;
        //console.log("loginComp dataObj.user:",dataObj.user)
        if (dataObj.user!== 'nonexistent'){
          let changePassToken : string= dataObj.user.access_token ;
          this.tokenStorage.saveToken(changePassToken);
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
