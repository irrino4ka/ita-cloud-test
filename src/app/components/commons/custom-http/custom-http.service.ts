import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomHttpService {
    private collectionName: string;

    constructor(private afs: AngularFirestore) { }

    public init(collectionName: string): any {
        this.collectionName = collectionName;
        return this;
    }

    public getCollection(): Observable<any> {
        return this.afs.collection(this.collectionName).valueChanges();
    }

    public getCollectionDocument(documentId: string): Observable<any> {
        return this.afs.doc(`${this.collectionName}/${documentId}`).valueChanges();
    }

    public setCollectionDocument(documentId: string, data: any): void {
        this.afs.collection(`${this.collectionName}`).doc(`${documentId}`).set(data);
    }

}
