import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomMaterialsModule } from '../../commons/custom-materials/custom-materials.module';

import { UsersRolesTableComponent } from './users-roles-table.component';
import { TableNgxComponent } from './table-ngx/table-ngx.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { UserRoleService } from './user-role.service';
import { TableRolesService } from './table-roles.service';
import { TABLE_CONST, tableConst } from './table.const';
import { TableRolesComponent } from './table-roles/table-roles.component';

@NgModule({
  imports: [
    NgxDatatableModule,
    CustomMaterialsModule
  ],
  declarations: [
    UsersRolesTableComponent,
    TableNgxComponent,
    TableRolesComponent,
    DeleteDialogComponent,
    AddDialogComponent
  ],
  exports: [ UsersRolesTableComponent ],
  providers: [
    UserRoleService,
    TableRolesService,
    {
      provide: TABLE_CONST,
      useValue: tableConst
    }
  ]
})

export class UsersRolesTableModule { }
