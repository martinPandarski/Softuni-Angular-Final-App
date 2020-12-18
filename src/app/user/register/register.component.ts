import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, [Validators.required]],
      username: [null, Validators.required],
      rePassword: [null, Validators.required]
    });
  }

  submitHandler(registerForm): void {
    const data = this.registerForm.value;
    this.userService.register(data).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
