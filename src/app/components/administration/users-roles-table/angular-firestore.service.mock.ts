import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AngularFirestoreCollection, AngularFirestoreDocument,
         DocumentChangeAction } from 'angularfire2/firestore';
import { QueryFn } from 'angularfire2/firestore/interfaces';
import * as firebase from 'firebase';
import DocumentChangeType = firebase.firestore.DocumentChangeType;
import DocumentChange = firebase.firestore.DocumentChange;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

export class AngularFirestoreMock<T> {
  public app;
  public firestore;
  public persistenceEnabled$;

  constructor(private user: T,
              private updateSpy,
              private deleteSpy) {
  }

  public collection(path: string, queryFn?: QueryFn): AngularFirestoreCollection<T> {

    const afsCollection: AngularFirestoreCollection<T> =
          new AngularFirestoreCollection<T>(null, null);

    afsCollection.snapshotChanges = (): Observable<DocumentChangeAction[]> => {
      const changeType: DocumentChangeType = 'added';
      const docSnapshot: DocumentSnapshot = {
        exists: true,
        ref: null,
        id: '1',
        metadata: null,
        data: () => this.user,
        get: () => null
      } as DocumentSnapshot;

      const docChange: DocumentChange = {
        type: changeType,
        doc: docSnapshot
      } as DocumentChange;

      const docChangeAction = {
        type: changeType,
        payload: docChange
      };

      const docChangeActions: DocumentChangeAction[] = [ docChangeAction ];

      return Observable.of(docChangeActions);
    };

    afsCollection.add = (data: any): Promise<any> => {
      return null;
    };

    afsCollection.doc = (p: string): AngularFirestoreDocument<any> => {
      return {
        ref: null,
        update: this.updateSpy,
        delete: this.deleteSpy,
        set: null,
        collection: null,
        snapshotChanges: null,
        valueChanges: null
      } as AngularFirestoreDocument<any>;
    };

    return afsCollection;
  }

  public doc() {
    return {
      ref: null,
      update: this.updateSpy,
      delete: this.deleteSpy,
      set: null,
      collection: null,
      snapshotChanges: null,
      valueChanges: null
    } as AngularFirestoreDocument<T>;
  }

  public createId(): string {
    return '1';
  }
}
