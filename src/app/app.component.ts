import { Component } from '@angular/core';
import {UserService} from './user/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-angular-app';
  constructor(private userService: UserService, private router: Router){}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  logoutHandler():void{
    this.userService.logout().subscribe(() => this.router.navigate(['/login']));
  }

}
