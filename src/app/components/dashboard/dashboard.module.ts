import { NgModule } from '@angular/core';

import { CommonsModule } from '../commons/commons.module';
import { LdapConfigModule } from './ldap-config/ldap-config.module';
import { CurrentUserModule } from './current-user/current-user.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonsModule,
    LdapConfigModule,
    CurrentUserModule
  ],
  declarations: [
    DashboardComponent
  ],
  entryComponents: [],
  exports: [
    LdapConfigModule,
    CurrentUserModule,
    DashboardComponent
  ],
  providers: []
})
  export class DashboardModule {}
