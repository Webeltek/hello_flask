import { Component, OnInit } from '@angular/core';
import { HttpEventService } from 'projects/angular-calendar/src/modules/week/http-service.service';
import { PythUser } from '../demo-app.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./main.component.scss'],
  template : `
  <div class="row mb-4">
    <div class="col-lg-10 d-flex flex-row bp-10 bg-success text-white">
      <h2 class="mx-auto display-1 block text-center">Hovden </h2>
    </div>
      <div class="col-lg-2 d-flex flex-row-reverse bg-success">
        <div class="card">
          <img class="card-img-top rounded" src="../../../../../../ufo.jpg" alt="Card image">
              <div class="card-body text-center">
                <h5 class="card-title">Logged inn som <ng-container *ngIf="true">admin:</ng-container></h5>
			          <p class="card-text">text</p>
              </div>
          </div>
      </div>
  <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
        <div class="container-fluid">
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="" routerLink="/login">Logg inn</a></li>
                <li class="nav-item"><a class="nav-link" href="" >Registrer</a></li>
                <li class="nav-item"><a class="nav-link" href="">Reset passord</a></li>
                <li class="nav-item"><a class="nav-link" href="">Logg ut</a></li>
                <ng-container *ngIf="true">
                  <li class="nav-item"><a class="nav-link" href="">Profile</a></li>
                </ng-container>
              </ul>
            </div>
        </div>
    </nav>

  <div class="row">
  <!-- {% with messages = get_flashed_messages() %}
    {% if messages %}
      {% for message in messages %}
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label=""></button>
          {{ message }}
        </div>
      {% endfor %}
    {% endif %}
  {% endwith %} -->
  </div>
  <!-- block navbar MENU BUTTONS -->
  <div class="row">  
  
      <div class="col-xl-3 btn-group" style="max-height:15rem;"> 
        <button type="button" class="btn btn-outline-primary" onclick="window.location.href='/contact';">Priser</button>
        <button type="button" class="btn btn-outline-primary" onclick="window.location.href='/about_us';">People</button>
        <button type="button" class="btn btn-outline-primary" onclick="window.location.href='/services';">Booking</button>
      <!--  <button type="button" class="btn btn-outline-primary" onclick="window.location.href='/services_old';">Jquery calendar</button> -->
      </div>
  
  </div>
  
  <div class="row">   
      <router-outlet></router-outlet>
  </div>`
})
export class MainComponent implements OnInit {

  constructor(private httpService: HttpEventService) { }

  loggedin_user : PythUser ;
  users : PythUser[] = [];
  curr_userId : number;

  getDbUsers(){
    this.httpService.getUsers().subscribe((response) => {
      let respObj =  JSON.parse(response);
      //console.log("getDBUsers() JSON.parse() : ", respObj)
      this.users = [];
      this.curr_userId = respObj.curr_user;
      for (let pythUser of respObj.users){
        this.users.push(pythUser);
        if(pythUser.id == this.curr_userId){
          this.loggedin_user = pythUser;
         }
      }
      this.users = [...this.users];
    })
  }

  ngOnInit(): void {
    this.getDbUsers();
  }

}
