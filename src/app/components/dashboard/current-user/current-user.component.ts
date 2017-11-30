import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CurrentUserServiceImp } from './current-user.service';
import { CurrentUser } from './current-user.model';

@Component({
    selector: 'cmp-ita-current-user',
    templateUrl: './current-user.component.html',
    styleUrls: ['./current-user.component.scss'],
})
export class CurrentUserComponent implements OnInit {

    public users: CurrentUser[];
    public currentUser: CurrentUser;
    public options: FormGroup;

    constructor(
        public fb: FormBuilder,
        private service: CurrentUserServiceImp,
        public thisDialogRef: MatDialogRef <CurrentUserComponent>
    ) { }

    public ngOnInit() {
        this.service.getUser().subscribe((users) => {
            users.map((currentUser) => {
                this.service.setUserData(currentUser);
                this.setForm();
            });
        });
        this.setForm();
    }

    public setForm() {
        this.options = this.fb.group({
            userName: this.service.getUserData().name,
            userDescription: this.service.getUserData().description,
            userDate: this.service.getUserData().date,
            userChoice: this.service.getUserData().choice,
            userLanguage: this.service.getUserData().language
        });
    }

    public onCloseConfirm() {
        if (!this.options.invalid) {
            const user: CurrentUser = {
                name: this.options.value.userName,
                description: this.options.value.userDescription,
                date: this.options.value.userDate,
                choice: this.options.value.userChoice,
                language: this.options.value.userLanguage
            };
            this.service.update(user);
            this.thisDialogRef.close('Confirm');
        }
    }
}
