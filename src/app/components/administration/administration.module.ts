import { NgModule } from '@angular/core';
import { AdministrationComponent } from './administration.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { ReportingModule } from './reporting/shared/reporting.module';
import { FilteringModule } from './filtering/filtering.module';
import { UsersRolesTableModule } from './users-roles-table/users-roles-table.module';
import { DeleteDialogComponent } from './users-roles-table/delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './users-roles-table/add-dialog/add-dialog.component';

@NgModule({
  imports: [
    ReportingModule,
    UsersRolesTableModule,
    FilteringModule,
    SidebarModule
  ],
  declarations: [AdministrationComponent],
  exports: [AdministrationComponent],
  entryComponents: [
    DeleteDialogComponent,
    AddDialogComponent
  ]
})

export class AdministrationModule {}
