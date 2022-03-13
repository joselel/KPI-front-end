import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [

  {
    path:'',
    component:DashboardComponent,
    children:
    [
      {
        path: 'kpi',
        loadChildren: () => import('./analysis-data/analysis-data.module').then(m => m.AnalysisDataModule)
      },
      {
        path: 'ventas',
        loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)
      },

      {
        path: 'articulos',
        loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
      },{
        path: '**', redirectTo: 'kpi', pathMatch: 'full'
      }
      
    ]
  },
  {
       path: '',
       redirectTo: 'dashboard/kpi',
       pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
