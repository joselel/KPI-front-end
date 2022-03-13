import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavContent, MatSidenavModule} from '@angular/material/sidenav';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

@NgModule({
  declarations: 
  [
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
