import { LdapConfigConst } from './ldap-config.const.interface';
import { Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SafeResourceUrl } from '@angular/platform-browser';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

import { LdapConfigService } from './ldap-config.service';
import { LdapConfigData } from './ldap-config.interface';
import { LDAP_CONFIG_CONST, ldapConfigConst } from './ldap-config.const';

@Component({
    selector: 'cmp-ita-ldap-config',
    templateUrl: './ldap-config.component.html',
    styleUrls: ['./ldap-config.component.scss']
})
export class LdapConfigComponent implements OnInit, OnDestroy {
    public title: string;
    public userID: string;
    public ldapConfigForm: FormGroup;
    public displayAuthInfo: boolean;
    public base64textString: string;
    public imagePath: SafeResourceUrl;

    public tooltipNameErrorContent: string;
    public tooltipHostsErrorContent: string;
    public ipPattern: string;
    public hostPattern: string;

    @ViewChild('nameErrorTooltip') public nameErrorTooltip: NgbTooltip;
    @ViewChild('hostsErrorTooltip') public hostsErrorTooltip: NgbTooltip;

    constructor(
        public dialogRef: MatDialogRef<LdapConfigComponent>,
        @Inject(MAT_DIALOG_DATA) public externalData: {name: string, hosts: string},
        @Inject(LDAP_CONFIG_CONST) public configConst: LdapConfigConst,
        public ldapConfigService: LdapConfigService,
        ) {}

    public ngOnInit() {
        this.title = this.configConst.title;
        this.tooltipNameErrorContent = this.configConst.tooltipNameErrorContent;
        this.tooltipHostsErrorContent = this.configConst.tooltipHostsErrorContent;
        this.ipPattern = this.configConst.ipPattern;
        this.hostPattern = this.configConst.hostPattern;
        this.displayAuthInfo = false;
        this.initLdapForm();
        this.getLdapConfigDataFromDatabase();
    }

    public ngOnDestroy(): void {
        this.dialogRef.close(this.externalData);
    }

    public checkNameValidity(): void {
        const ldapName = this.ldapConfigForm.get('ldapName');
        if (this.nameErrorTooltip.isOpen()) {
            this.nameErrorTooltip.close();
        }
        if (ldapName.invalid && (ldapName.dirty || ldapName.touched)) {
            this.nameErrorTooltip.open();
        }
    }

    public onAuthStatusChange(event): void {
        this.displayAuthInfo = event.value === 'true' ?  true : false;
    }

    public checkHostsValidity(): void {
        const hosts = this.ldapConfigForm.get('hosts');
        if (this.hostsErrorTooltip.isOpen()) {
            this.hostsErrorTooltip.close();
        }
        if (hosts.invalid && (hosts.dirty || hosts.touched)) {
            this.hostsErrorTooltip.open();
        }
    }

    public validateHosts(control: FormControl): {[errorMessage: string]: boolean} {
        const hostRegExp = new RegExp(this.hostPattern);
        const ipRegExp = new RegExp(this.ipPattern);
        const input: string = control.value;
        const hosts: string[] = input ? input.split(',') : [];
        const inputValidity: boolean = hosts.every((host) => {
            return hostRegExp.test(host) || ipRegExp.test(host);
        });
        return inputValidity ? null : {HostsValidity: inputValidity};
    }

    public handleFileSelect(event): void {
        const files = event.target.files;
        const file = files[0];
        if (files && file) {
          const reader = new FileReader();
          reader.onload = this._handleReaderLoaded.bind(this);
          reader.readAsBinaryString(file);
        }
      }

    public _handleReaderLoaded(readerEvent): void {
        const binaryString = readerEvent.target.result;
        this.base64textString = btoa(binaryString);
        this.imagePath = this.ldapConfigService.setImagePath(this.base64textString);
        this.ldapConfigForm.get('picture').setValue(this.base64textString);
      }

    public onSubmit(): void {
        this.checkHostsValidity();
        if (this.ldapConfigForm.valid) {
            const ldapData: LdapConfigData = this.ldapConfigForm.value;
            this.ldapConfigService.setServerInfo(this.userID, ldapData);
            this.externalData = this.ldapConfigService
                .setDataToReturnFromModalWindow(this.ldapConfigForm.value);
            this.ldapConfigForm.reset();
            this.dialogRef.close(this.externalData);
        }
    }

    private initLdapForm(): void {
        this.ldapConfigForm = new FormGroup({
            ldapName: new FormControl(null, [
                Validators.required,
                Validators.pattern('^[A-Z\\a-z\\d\\s]+$')]),
            hosts: new FormControl(null, [
                Validators.required,
                this.validateHosts.bind(this)
            ]),
            authStatus: new FormControl(false, Validators.required),
            authorizationInfo: new FormGroup({
                user: new FormControl(null),
                password: new FormControl(null)
            }),
            picture: new FormControl(null),
        });
    }

    private getLdapConfigDataFromDatabase(): void {
        this.ldapConfigService.getUserId().subscribe(
            // TODO This code will be refactored after user authorization will be implemented
            (users) => {
                this.userID = users[0].uid;
                this.ldapConfigService.getServerInfo(this.userID).subscribe(
                    (data: LdapConfigData) => {
                        this.displayAuthInfo = data.authStatus === 'true' ? true : false;
                        this.imagePath = this.ldapConfigService.setImagePath(data.picture);
                        this.ldapConfigForm.setValue(data);
                        this.externalData = this.ldapConfigService
                            .setDataToReturnFromModalWindow(data);
                     }
                );
            }
        );
    }
}
