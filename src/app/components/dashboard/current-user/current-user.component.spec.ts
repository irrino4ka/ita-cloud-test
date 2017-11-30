import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CurrentUser } from './current-user.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
    ReactiveFormsModule,
    FormsModule,
} from '@angular/forms';

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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CurrentUserServiceImp } from '../current-user/current-user.service';
import { CurrentUserServiceStub } from '../current-user/current-user.service.stub';
import { CurrentUserComponent } from './current-user.component';

describe('CurrentUserComponent', () => {
    let component: CurrentUserComponent;
    let fixture: ComponentFixture<CurrentUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                FormsModule,
                BrowserAnimationsModule,
                NoopAnimationsModule,
                MatButtonModule,
                MatCardModule,
                MatDatepickerModule,
                MatDialogModule,
                MatIconModule,
                MatInputModule,
                MatNativeDateModule,
                MatRadioModule,
                MatSelectModule,
            ],
            declarations: [ CurrentUserComponent ],
            providers: [
                {
                    provide: MatDialogRef,
                    userValue: {
                    }
                },
                {
                    provide: MAT_DIALOG_DATA,
                    userValue: {
                    }
                },
                {
                    provide: CurrentUserServiceImp,
                    useClass: CurrentUserServiceStub
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CurrentUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('setForm function should set data from BD to forms of popUp', () => {
        component.options = component.fb.group({
            userName: 'Mark',
            userDescription: 'Smt',
            userDate: '01/02/17',
            userChoice: 'Only',
            userLanguage: 'English'
        });

        component.setForm();

        expect(component.options.value.userName).toEqual('Marcus');
        expect(component.options.value.userDescription).toEqual('Smb');
        expect(component.options.value.userDate).toEqual('02/03/12');
        expect(component.options.value.userChoice).toEqual('Save');
        expect(component.options.value.userLanguage).toEqual('Українська');
    });
});
