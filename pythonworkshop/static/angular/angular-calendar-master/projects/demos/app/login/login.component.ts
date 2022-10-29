import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    const confirmedUserEmail = this.actRoute.snapshot.paramMap.get('userEmail');
    this.form.user_email = confirmedUserEmail;
    if (this.isLoggedIn){
      this.router.navigate(['calendar'])
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        let dataObj = data as any;
        //console.log("loginComp dataObj.user:",dataObj.user)
        if (dataObj.user!== 'nonexistent'){
          let accessToken : string= dataObj.user.access_token ;
          this.tokenStorage.saveToken(accessToken);
          this.tokenStorage.saveUser(dataObj.user);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          //this.reloadPage();
          this.router.navigate(['calendar'])
        }

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}

