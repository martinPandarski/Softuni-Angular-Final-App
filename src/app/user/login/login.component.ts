import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from '../user.service';


@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    

  ) { }
    
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
    });
  }

  submit(formValue: { login: string, password: string }): void {
    this.userService.login(formValue).subscribe({
      next: (data) => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert(err.error.message);
      }
    });
  }

}
