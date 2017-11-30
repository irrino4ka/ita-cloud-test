import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AngularFirestoreCollection, AngularFirestoreDocument,
         DocumentChangeAction } from 'angularfire2/firestore';
import { QueryFn } from 'angularfire2/firestore/interfaces';
import * as firebase from 'firebase';
import DocumentChangeType = firebase.firestore.DocumentChangeType;
import { CurrentUser } from './current-user.model';
import DocumentChange = firebase.firestore.DocumentChange;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

export class AngularFirestoreMock {
    public app;
    public firestore;
    public persistenceEnabled$;

    constructor(private user: CurrentUser,
                private updateSpy,
                private valueChangeSpy) {
    }

    public collection(path: string, queryFn?: QueryFn): AngularFirestoreCollection<CurrentUser> {

        const CurrentUserCollection: AngularFirestoreCollection<CurrentUser> =
            new AngularFirestoreCollection<CurrentUser>(null, null);
        return CurrentUserCollection;
    }

    public doc(): AngularFirestoreDocument<CurrentUser> {
        return {
            ref: null,
            update: this.updateSpy,
            set: null,
            collection: null,
            snapshotChanges: null,
            valueChanges: this.valueChangeSpy
        } as AngularFirestoreDocument<CurrentUser>;
    }

    public createId(): string {
        return '';
    }
}
