import { Component, OnInit, ViewChild } from '@angular/core';
import {IUser} from '../../shared/interfaces/interfaces';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(private userService: UserService) {}
  get currentUser(): IUser{
    return this.userService.currentUser
  }
  
  
  ngOnInit(): void {
  }
 
}
