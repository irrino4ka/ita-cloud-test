import { Injectable } from '@angular/core';
import { CurrentUser } from './current-user.model';
import { Observable } from 'rxjs/Observable';
import { CurrentUserService } from './current-user.service.interface';
import { ComponentsModule } from '../../components.module';
import 'rxjs/add/observable/of';

@Injectable()

    export class CurrentUserServiceStub implements CurrentUserService {
        public usersData: Observable<CurrentUser[]>;
        public userData: Observable<CurrentUser>;
        public user: CurrentUser = {
            name: 'Marcus',
            description: 'Smb',
            date: '02/03/12',
            choice: 'Save',
            language: 'Українська'
        };

        public getUser(): Observable<CurrentUser[]> {
            return Observable.of([]);
        }

        public getUserData(): CurrentUser {
            return this.user;
        }

        public setUserData(currentUser: CurrentUser) {
            // Body
        }

        public update(user: CurrentUser) {
            this.user.name = user.name;
            this.user.description = user.description;
            this.user.date = user.date;
            this.user.choice = user.choice;
            this.user.language = user.language;
        }
    }
