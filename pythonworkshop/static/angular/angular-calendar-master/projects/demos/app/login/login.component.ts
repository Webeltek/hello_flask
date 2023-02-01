import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute, Router ,ParamMap} from '@angular/router';
// import { OwlOptions } from 'ngx-owl-carousel-o';

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
  role: string = '';

  videos = [
    {
      id: '1',
      videoId: 'aF2CAFEyttU'
    },
    {
      id: '2',
      videoId: 'GnWhniuvMrM'
    }
  ]

  /* videosOptions: OwlOptions = {
    items: 3,
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout:2500,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplaySpeed: 800,
    navSpeed: 800,
    navText: ["<i class='bi bi-chevron-compact-left prevArrowVideos'></i>", "<i class='bi bi-chevron-compact-right nextArrowVideos'></i>"],
    animateIn: true,
    animateOut: true,
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      760: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    nav: true
  } */

  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private actRoute: ActivatedRoute,
    private router: Router) { }  

  apiLoaded = false;
    
  ngOnInit(): void {
     //script for youtube-player
     /* if(!this.apiLoaded){
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
     } */

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().is_admin? 'admin':'user';
    }
    const confirmedUserEmail = this.actRoute.snapshot.paramMap.get('userEmail');
    this.form.user_email = confirmedUserEmail;
    if (this.isLoggedIn){
      this.router.navigate(['calendar'])
    }

   const sessionParam = this.actRoute.snapshot.paramMap.get("session");
    if (sessionParam==="expired"){
      this.errorMessage = "Session expired!"
      console.log("login expired errorMessage",this.errorMessage)
    } else if (sessionParam==="signout"){
      this.errorMessage ="signed out";
      console.log("login signout errorMessage",this.errorMessage)
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
          this.tokenStorage.authenticated$.next(true);
          //this.reloadPage();
          this.router.navigate(['calendar'])
        } else if(dataObj.user === 'nonexistent'){
          this.errorMessage = "Wrong username or password!";
          this.isLoginFailed = true;
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

