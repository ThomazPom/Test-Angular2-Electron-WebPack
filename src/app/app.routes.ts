import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {AccueilComponent} from "./components/accueil/accueil.component";

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];
