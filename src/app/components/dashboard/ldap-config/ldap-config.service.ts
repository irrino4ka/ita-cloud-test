import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { LdapConfigData } from './ldap-config.interface';
import { CustomHttpService } from '../../commons/custom-http/custom-http.service';

@Injectable()
export class LdapConfigService {

    constructor(
        private _httpService: CustomHttpService,
        private domSanitizer: DomSanitizer
    ) {  }

    public getUserId(): Observable<any> {
        // TODO This funnction will be replaced when user authorization will be implemented.
        // User ID will be recived after user`s authorization.
        this._httpService.init(`users`);
        return this._httpService.getCollection();
    }

    public getServerInfo(userId: string): Observable<LdapConfigData>  {
        this._httpService.init(`ldap_configuration`);
        return this._httpService.getCollectionDocument(userId);
    }

    public setServerInfo(userId: string, ldapConfig: LdapConfigData): void {
        this._httpService.init(`ldap_configuration`);
        this._httpService.setCollectionDocument(userId, ldapConfig);
    }

    public setImagePath(base64textString: string): SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(
            'data:image/jpg;base64,' + base64textString
        );
    }

    public setDataToReturnFromModalWindow(ldapConfig: LdapConfigData) {
        return {
            name: ldapConfig.ldapName,
            hosts: ldapConfig.hosts
        };
    }
}
