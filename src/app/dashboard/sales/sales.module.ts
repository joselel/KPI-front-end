import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { AddSaleComponent } from './add-sale/add-sale.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { SalesDatabaseComponent } from './sales-database/sales-database.component';
import { SalesAnalysisComponent } from './sales-analysis/sales-analysis.component';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    SalesComponent,
    AddSaleComponent,
    SalesDatabaseComponent,
    SalesAnalysisComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
  ]
})
export class SalesModule { }
