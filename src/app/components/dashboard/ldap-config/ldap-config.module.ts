import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { LdapConfigComponent } from './ldap-config.component';
import { LdapModalComponent } from './ldap-modal/ldap-modal.component';

import { LdapConfigService } from './ldap-config.service';
import { LDAP_CONFIG_CONST, ldapConfigConst } from './ldap-config.const';

import { CustomMaterialsModule } from '../../commons/custom-materials/custom-materials.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    CustomMaterialsModule
  ],
  declarations: [
    LdapConfigComponent,
    LdapModalComponent
  ],
  entryComponents: [
    LdapConfigComponent
  ],
  exports: [
    LdapConfigComponent,
    LdapModalComponent
  ],
  providers: [
    LdapConfigService,
    {provide: LDAP_CONFIG_CONST, useValue: ldapConfigConst}
  ]
})
  export class LdapConfigModule {}
