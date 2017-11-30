import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonsModule } from './commons/commons.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdministrationModule } from './administration/administration.module';
import { CustomMaterialsModule } from './commons/custom-materials/custom-materials.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonsModule,
    DashboardModule,
    BrowserModule,
    CustomMaterialsModule,
    AdministrationModule
  ],
  declarations: [],
  providers: [],
  exports: [
    AdministrationModule,
    DashboardModule,
    CommonsModule
  ]
})
export class ComponentsModule { }
