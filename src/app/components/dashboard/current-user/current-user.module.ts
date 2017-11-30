import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CurrentUserComponent } from './current-user.component';
import { DialogComponent } from './dialog/dialog.component';
import { dialogConfig } from './dialog/dialog-config.const';

import { CurrentUserServiceImp } from './current-user.service';
import { currentUserConfig } from './current-user-config.const';

import { CustomMaterialsModule } from '../../commons/custom-materials/custom-materials.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialsModule
    ],
    declarations: [
    CurrentUserComponent,
        DialogComponent
    ],
    entryComponents: [
        CurrentUserComponent
    ],
    exports: [
        DialogComponent,
        CurrentUserComponent
    ],
    providers: [CurrentUserServiceImp]
})
    export class CurrentUserModule {}
