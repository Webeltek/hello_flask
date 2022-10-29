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
    const token = this.actRoute.snapshot.paramMap.get('token')!;
    this.authService.confirm(token).subscribe(response => {
      let userConfirmed = response.user.user_confirmed;
      if (userConfirmed){
        this.msg = response.msg;
        this.router.navigate(['login']);
      } else {
        this.msg = response.msg;
      }
    });
  }

}
