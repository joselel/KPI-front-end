import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSaleComponent } from './add-sale/add-sale.component';
import { SalesAnalysisComponent } from './sales-analysis/sales-analysis.component';
import { SalesDatabaseComponent } from './sales-database/sales-database.component';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  {
    path: '',
    component:SalesComponent,
    children:[
      {
        path: 'nueva-venta',
        component:AddSaleComponent
      },
      {
        path: 'base-datos',
        component:SalesDatabaseComponent
      },
      {
        path: 'analisis',
        component: SalesAnalysisComponent
      },
      {
        path: '**', redirectTo: 'nueva-venta', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
