import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import 'rxjs/add/operator/map';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { UserRole } from '../user-role';
import { UserRoleService } from '../user-role.service';
import { TABLE_CONST, tableConst } from '../table.const';
import { TableConst } from '../table.const.interface';

@Component({
  selector: 'app-table-ngx',
  templateUrl: './table-ngx.component.html',
  styleUrls: ['./table-ngx.component.scss'],
})
export class TableNgxComponent implements OnInit {
  public rows: any[];
  public editing: any;
  public selected: any;
  public textError: string;
  public classActive: string;
  public classActiveUser: string;
  public classInactiveUser: string;
  public classShow: string;
  public classHide: string;
  public addDialogWidth: string;
  public addDialogHeight: string;
  public styleError: string;
  public getCellClass: any;

  public columns = [
    { prop: 'user' },
    { name: 'role' },
    { name: 'status' }
  ];

  constructor(private service: UserRoleService,
              private dialog: MatDialog,
              @Inject(TABLE_CONST) public tableRoleConst: TableConst) {
  }

  public ngOnInit() {
    this.rows = [];
    this.editing = {};
    this.selected = [];
    this.textError = this.tableRoleConst.textError;
    this.classActive = this.tableRoleConst.classActive;
    this.classActiveUser = this.tableRoleConst.classActiveUser;
    this.classInactiveUser = this.tableRoleConst.classInactiveUser;
    this.classShow = this.tableRoleConst.classShow;
    this.classHide = this.tableRoleConst.classHide;
    this.addDialogHeight = this.tableRoleConst.addDialogHeight;
    this.addDialogWidth = this.tableRoleConst.addDialogWidth;
    this.styleError = this.tableRoleConst.styleError;
    this.service.list().subscribe((data: UserRole[]) => this.rows = data);
  }

  public onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  public setClasses(status) {
    return (status === this.classActive) ? this.classActiveUser : this.classInactiveUser;
  }

  public setClassesShow() {
    return (this.selected.length) ? this.classShow : this.classHide;
  }
  public setClassValid(isInvalid: boolean) {
    return (isInvalid) ? this.classShow : this.classHide;
  }

  public openDialog() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: this.addDialogWidth,
      height: this.addDialogHeight,
      data: { selected: this.selected }
    });

    dialogRef.afterClosed().subscribe((result): any => {
      (result || []).forEach((element) => {
        this.service.delete(element.id);
      });
      this.selected.splice(0, this.selected.length);
    });
  }

  public openAddDialog() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: this.addDialogWidth,
      height: this.addDialogHeight
    });
  }

  public updateValue(event, cell, rowIndex, id): void {
    if (!event.target.checkValidity()) {
      this.rows[rowIndex].isInvalid = true;
      this.setClassValid(this.rows[rowIndex].isInvalid);
      event.target.style = this.styleError;
    } else {
      this.rows[rowIndex].isInvalid = false;
      this.setClassValid(this.rows[rowIndex].isInvalid);
      this.editing[`${rowIndex}-${cell}`] = false;
      this.rows[rowIndex][cell] = event.target.value;
      this.service.update(id, cell, event.target.value);
    }
  }

}
