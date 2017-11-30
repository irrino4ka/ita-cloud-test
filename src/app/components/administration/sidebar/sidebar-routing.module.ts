import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportingComponent } from '../reporting/shared/reporting.component';
import { UsersRolesTableComponent } from '../users-roles-table/users-roles-table.component';
import { FilteringComponent } from '../filtering/filtering.component';
import { AdministrationComponent } from '../administration.component';

const routes: Routes = [
  {
    path: 'administration',
    redirectTo: 'administration/reporting',
    pathMatch: 'full'
  },

  {
    path: 'administration',
    component: AdministrationComponent,
    children: [
      {
       path: 'reporting',
       component: ReportingComponent,
     },
     {
       path: 'users/roles',
       component: UsersRolesTableComponent
     },
     {
        path: 'filtering',
        component: FilteringComponent
      }
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
