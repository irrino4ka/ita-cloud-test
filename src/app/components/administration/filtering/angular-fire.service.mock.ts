import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from './user.interface';
import * as firebase from 'firebase/app';

export class AngularFireMock {
    public collection(path: string): AngularFirestoreCollection<any> {
        const afsCollection: AngularFirestoreCollection<User> =
            new AngularFirestoreCollection<User>(null, null);
        return afsCollection;
    }
}
