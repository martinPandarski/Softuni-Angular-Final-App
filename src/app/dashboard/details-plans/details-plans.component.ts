import { Component, OnInit } from '@angular/core';
import {IPlan} from '../../shared/interfaces/interfaces/plan'
import { DashboardService } from '../dashboard.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-edit-plans',
  templateUrl: './details-plans.component.html',
  styleUrls: ['./details-plans.component.css']
})
export class DetailsPlansComponent implements OnInit {

  plans: IPlan[];
 
  constructor(private dashboardService: DashboardService, private userService: UserService) {
   }
  // get ownerId(): any{
  //   return this.userService.currentUser.ownerId
  // }
  
  ngOnInit(): void {
    this.dashboardService.loadPlanList().subscribe(planList =>{
     this.plans = planList;
  
    })
  }
  

}
