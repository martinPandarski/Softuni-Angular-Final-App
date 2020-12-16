import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../user/user.service'


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(userService: UserService) { }

  ngOnInit(): void {
  }

}
