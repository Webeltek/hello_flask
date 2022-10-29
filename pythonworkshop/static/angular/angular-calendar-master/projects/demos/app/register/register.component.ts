import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.register( email, password).subscribe(
      response => {
        //console.log(response);
        let responseObj = response as any;
        let is_duplicate : boolean = responseObj.is_duplicate
        if (!is_duplicate){
          let sentToken = response.sent_token;
          this.tokenStorage.saveConfirmToken(sentToken)
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        } else {
          this.isSuccessful = false;
          this.isSignUpFailed = true;
        }
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}

