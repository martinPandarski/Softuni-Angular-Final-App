import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';
import { storageServiceProvider } from './storage.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  providers:[AuthGuard, storageServiceProvider],
  exports:[
    
  ]
})
export class CoreModule { }
