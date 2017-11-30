import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CurrentUser } from './current-user.model';
import { CurrentUserService } from './current-user.service.interface';

import { currentUserConfig } from './current-user-config.const';
import { CurrentUserConfig } from './current-user-config.interface';

@Injectable()

    export class CurrentUserServiceImp implements CurrentUserService {
        public usersCollection: AngularFirestoreCollection<CurrentUser>;
        public userDocument: AngularFirestoreDocument<CurrentUser>;
        public usersData: Observable<CurrentUser[]>;
        public userData: Observable<CurrentUser>;
        public user: CurrentUser = {name: '', description: '', date: '', choice: '', language: ''};

        constructor(private afs: AngularFirestore) {
            this.usersCollection = this.afs.collection(currentUserConfig.collectionName);
            this.usersData = this.usersCollection.valueChanges();
            this.userDocument = this.afs.doc(currentUserConfig.collectionPath);
            this.userData = this.userDocument.valueChanges();
        }

        public getUser(): Observable<CurrentUser[]> {
            return this.usersData;
        }

        public getUserData(): CurrentUser {
            return this.user;
        }

        public setUserData(currentUser: CurrentUser): void {
            this.user = currentUser;
        }

        public update(user: CurrentUser): void {
            this.userDocument.update({ description: user.description,
            name: user.name, date: user.date, choice: user.choice, language: user.language } );
        }
    }
