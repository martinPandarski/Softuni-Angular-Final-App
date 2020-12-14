import { Component, OnInit, ViewChild } from '@angular/core';
import {IUser} from '../../shared/interfaces/interfaces';
import {UserService} from '../user.service';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isDisplayed = true;
 
  constructor(private userService: UserService, private router: Router) {}
  get currentUser(): IUser{
    return this.userService.currentUser
  }
  public addBtn(): void{
    if(this.isDisplayed)
        {
            this.isDisplayed = false;
        }else{
            this.isDisplayed = true;
        }
  }

  // phoneFormControl = new FormControl('', [
  //   Validators.required,
    
  // ]);
  
  submitHandler(data: any): void {
    this.userService.updateProfile(data).subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit(): void {
  }
 
}
