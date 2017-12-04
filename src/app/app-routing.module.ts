import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {SubscribeComponent} from "./components/subscribe/subscribe.component";
import {MenuComponent} from "./components/menu/menu.component";

const routes: Routes = [
  {path: '', redirectTo: 'login',  pathMatch: 'full'},
  { path: 'login',   component: LoginComponent },
  { path: 'subscribe',   component: SubscribeComponent },
  { path: '', component: MenuComponent,
    children: [
      {path: 'home', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
