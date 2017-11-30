import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialsModule } from '../../../commons/custom-materials/custom-materials.module';

import { ReportingComponent } from './reporting.component';
import { UserByteSizeComponent } from '../user-byte-size/user-byte-size.component';
import { PopularResourceComponent } from '../popular-resource/popular-resource.component';

import { ReportingRoutingModule } from './reporting-routing.module';
import { ChartsModule } from 'ng2-charts';
import { ReportingService } from './reporting.service';
import { UsersCountComponent } from '../users-count/users-count.component';

@NgModule({
  imports: [
    CommonModule,
    ReportingRoutingModule,
    ChartsModule,
    CustomMaterialsModule
  ],
  declarations: [
    ReportingComponent,
    UserByteSizeComponent,
    PopularResourceComponent,
    UsersCountComponent
  ],
  exports: [ ReportingComponent ],
  providers: [ ReportingService ]
})

export class ReportingModule { }
