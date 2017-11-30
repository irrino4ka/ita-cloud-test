import { NgModule } from '@angular/core';

import { ItaHeaderComponent } from './ita-header.component';
import { ItaHeaderRoutingModule } from './ita-header-routing.module';
import { DropdownBasicModule } from './dropdown-basic/dropdown-basic.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    ItaHeaderRoutingModule,
    TranslateModule,
    DropdownBasicModule
  ],
  declarations: [ItaHeaderComponent],
  exports: [ItaHeaderComponent, DropdownBasicModule]
})
export class ItaHeaderModule { }
