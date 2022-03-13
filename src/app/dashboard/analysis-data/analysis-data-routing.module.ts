import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisDataComponent } from './analysis-data.component';

const routes: Routes = [
  {
    path: '',
    component:AnalysisDataComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisDataRoutingModule { }
