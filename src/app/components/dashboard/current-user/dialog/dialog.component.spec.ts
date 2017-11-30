import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';

import {
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
  } from '@angular/material';

describe('DialogComponent', () => {
    let component: DialogComponent;
    let fixture: ComponentFixture<DialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DialogComponent ],
            imports: [
                MatDialogModule,
                MatButtonModule,
                MatCardModule,
                MatDatepickerModule,
                MatDialogModule,
                MatIconModule,
                MatInputModule,
                MatNativeDateModule,
                MatRadioModule,
                MatSelectModule,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
