import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatTableModule,
  MatProgressBarModule,
  MatCardModule,
  MatDatepickerModule,
  MatIconModule,
  MatNativeDateModule
} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const MATERIAL_MODULES = [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDialogModule,
    MatTooltipModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTableModule,
    MatProgressBarModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule
];

@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
  })
  export class CustomMaterialsModule { }
