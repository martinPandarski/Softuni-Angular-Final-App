import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    MatProgressBarModule
    
  ],
  exports: [
    MatProgressBarModule
  ]
})
export class SharedModule { }
