import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LdapConfigComponent } from '../ldap-config.component';

@Component({
    selector: 'cmp-ita-ldap-modal',
    templateUrl: './ldap-modal.component.html',
    styleUrls: ['./ldap-modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LdapModalComponent implements OnInit {
    public title: string;
    public name: string = 'init';
    public hosts: string = 'init';

constructor(
    public dialog: MatDialog) { }

public openDialog(): void {
    const dialogRef = this.dialog.open(
        LdapConfigComponent, {
            panelClass: 'modal-window',
            width: '500px',
            height: '600px',
            data: { name: this.name, hosts: this.hosts }
        });
    dialogRef.afterClosed().subscribe((result) => {
       this.name = result.name;
       this.hosts = result.hosts;
    });
}

public ngOnInit() {
    this.title = 'LDAP Configuration';
}
}
