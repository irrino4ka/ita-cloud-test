import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeSettingsComponent } from '../../time-settings/time-settings.component';
import { LanguageComponent } from '../../language/language.component';

const routes: Routes = [
  {
    path: 'time-settings',
    component: TimeSettingsComponent
  },
  {
    path: 'language',
    component: LanguageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownBasicRoutingModule { }
