import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DashboardService} from '../dashboard.service'
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.css']
})
export class NewPlanComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }
  submit(data: any): void {
    
    this.dashboardService.savePlan(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {

        }
      });
  }
}
