import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserRole } from './user-role';
import { DataServiceImpl } from './data.service';

@Injectable()
export class UserRoleService extends DataServiceImpl<UserRole> {
    constructor(private angularFirestore: AngularFirestore) {
        super(angularFirestore.collection('user_roles'));
    }
}
