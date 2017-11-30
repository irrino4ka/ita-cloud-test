import { Injectable, Inject } from '@angular/core';
import { AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Rx';
import { User } from './user.interface';
import * as firebase from 'firebase/app';

import { SERVICE_CONFIG, serviceConfig } from './service-config.const';
import { ServiceConfig } from './service-config.interface';

@Injectable()
export class UserTrafficService {
    public usersCollection: AngularFirestoreCollection<User>;
    public users: Observable<User[]>;

    constructor(@Inject(SERVICE_CONFIG) public serviceConst: ServiceConfig,
                public angularFirestore: AngularFirestore) {
    }

    public getUsers() {
        return this.users = this.angularFirestore
            .collection<User>(serviceConfig.collectionName).valueChanges();
    }

    public getQueryResults(start, end) {
        return this.users = this.angularFirestore
            .collection<User>(serviceConfig.collectionName, (ref) => {
                return ref.where(serviceConfig.queryName, '>=', start)
                        .where(serviceConfig.queryName, '<=', end);
        }).valueChanges();
    }

}
