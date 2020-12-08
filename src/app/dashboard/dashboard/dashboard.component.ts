import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {UserService} from '../../user/user.service';
import {DashboardService} from '../dashboard.service';
import {IPlan} from '../../shared/interfaces/interfaces';
import {MatDialog} from '@angular/material/dialog'
import { NewPlanComponent } from '../new-plan/new-plan.component';


@Component({
  selector: 'table-expandable-rows-example',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent implements OnInit{
  dataSource: IPlan[];
  columnsToDisplay = ['title', 'category','duration', 'difficulty'];
  expandedElement: IPlan | null;
  constructor(private userService: UserService, private dashboardService: DashboardService){}
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  
  ngOnInit():void{
    this.dashboardService.loadPlanList().subscribe(planList =>{
      this.dataSource = planList;
  
    })
    
  }

   
  
}
 // dataSource = this.ELEMENT_DATA;


// export interface PeriodicElement {
//   Title: string;
//   Category: number;
//   Duration: string;
//   Difficulty: string;
//   description: string;
// }

