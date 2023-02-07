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
    let userConfByAdm = this.actRoute.snapshot.paramMap.get('user_conf_by_adm');
    console.log("ConfComp userConfirmed",userConfirmed);
      if (userConfirmed==='True'){
        this.router.navigate(['login']);
        this.msg = "User is confirmed!"
      } else if (userConfirmed!=='True'){
        this.msg = "User is not confirmed!"
      }

      if (userConfByAdm==='True'){
        this.router.navigate(['login']);
        this.msg= "User is confirmed by admin!"
      }
      else if(userConfByAdm!=='True') {
        this.msg = "User is not confirmed by admin!";
        console.log("ConfComp user not confirmed by admin")
      }
    ;
  }

}
