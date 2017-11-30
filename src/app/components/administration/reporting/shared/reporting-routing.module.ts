import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserByteSizeComponent } from '../user-byte-size/user-byte-size.component';
import { PopularResourceComponent } from '../popular-resource/popular-resource.component';
import { UsersCountComponent } from '../users-count/users-count.component';

const routes: Routes = [
  {
    path: 'administration/reporting/user-byte-size',
    component: UserByteSizeComponent
  },
  {
    path: 'administration/reporting/popular-resource',
    component: PopularResourceComponent
  },
  {
    path: 'administration/reporting/resource',
    component: UsersCountComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { }
