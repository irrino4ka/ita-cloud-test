import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CurrentUserComponent } from '../current-user.component';

import { dialogConfig } from './dialog-config.const';
import { DialogConfig } from './dialog-config.interface';

@Component({
    selector: 'cmp-ita-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

    constructor(public dialog: MatDialog) { }

    public openDialog() {
        const dialogRef = this.dialog.open(CurrentUserComponent, {
            height: dialogConfig.dialogHeight,
            width: dialogConfig.dialogWidth
        });
    }
}
