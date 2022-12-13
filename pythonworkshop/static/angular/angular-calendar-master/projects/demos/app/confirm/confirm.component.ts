import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'mwl-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private actRoute: ActivatedRoute, 
    private router: Router,
    private tokenStorage: TokenStorageService) { }

  msg : string;  

  ngOnInit(): void {
    let userConfirmed = this.actRoute.snapshot.paramMap.get('userconfirmed');
    console.log("ConfComp userConfirmed",userConfirmed);
      if (userConfirmed==='True'){
        this.router.navigate(['login']);
      } else if(userConfirmed==='False') {
        this.msg = "user is not confirmed!";
        console.log("ConfComp user not confirmed")
      }
    ;
  }

}
