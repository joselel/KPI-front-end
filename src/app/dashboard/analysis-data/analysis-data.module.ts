import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisDataRoutingModule } from './analysis-data-routing.module';
import { AnalysisDataComponent } from './analysis-data.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AnalysisDataComponent
  ],
  imports: [
    CommonModule,
    AnalysisDataRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class AnalysisDataModule { }
