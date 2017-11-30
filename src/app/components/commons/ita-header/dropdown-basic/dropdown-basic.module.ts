import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownBasicComponent } from './dropdown-basic.component';
import { DropdownBasicRoutingModule } from './dropdown-basic-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    NgbModule,
    TranslateModule,
    DropdownBasicRoutingModule
  ],
  declarations: [
    DropdownBasicComponent
  ],
  exports: [
    DropdownBasicComponent
  ]
})
export class DropdownBasicModule { }
