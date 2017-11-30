import { Injectable } from '@angular/core';
import { UserData } from './reporting';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()

export class ReportingService {
 public  usersDataCollectionRef: AngularFirestoreCollection<UserData>;

  constructor(private afs: AngularFirestore) {
    this.usersDataCollectionRef = this.afs.collection<UserData>('reporting');
  }

public getUsersData(): Observable<any>  {
    return this.usersDataCollectionRef.snapshotChanges().map((actions) => {
       return actions.map((action) => {
         return action.payload.doc.data();
       });
    });
  }

}
