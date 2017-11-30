import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ItaHeaderModule } from './ita-header/ita-header.module';
import { ItaFooterComponent } from './ita-footer/ita-footer.component';
import { TimeSettingsComponent } from './time-settings/time-settings.component';
import { LanguageComponent } from './language/language.component';
import { WidgetWrapComponent } from './widget-wrap/widget-wrap.component';
import { CustomMaterialsModule } from './custom-materials/custom-materials.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ItaHeaderModule,
    CommonModule,
    TranslateModule,
    NgbModule,
    CustomMaterialsModule
  ],
  declarations: [
    ItaFooterComponent,
    TimeSettingsComponent,
    LanguageComponent,
    WidgetWrapComponent
  ],
  entryComponents: [],
  exports: [
    CustomMaterialsModule,
    ItaHeaderModule,
    ItaFooterComponent,
    WidgetWrapComponent
  ],
  providers: []
})
  export class CommonsModule {}
