import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { DemoAppComponent } from './demo-app.component';

export const ROUTES: Routes = [
    { path: '', component: DemoAppComponent },
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    ];