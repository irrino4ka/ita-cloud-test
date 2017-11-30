import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { DocumentData } from 'firebase/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DataService } from './data.service.interface';

export class DataServiceImpl<T> implements DataService<T> {

  constructor(private collection: AngularFirestoreCollection<T>) {
  }

  public list(): Observable<T[]> {
    return this.collection.snapshotChanges().map((actions) => {
      return actions.map((action) => {
        const data = action.payload.doc.data();
        data.id = action.payload.doc.id;
        return data as T;
      });
    });
  }

  public add(element: T): void {
    this.collection.add(element);
  }

  public update(id: string, property: string, newValue: string): void {
    const document: AngularFirestoreDocument<T> = this.collection.doc(id);
    const data = {};
    data[property] = newValue;
    document.update(data);
  }

  public delete(id: string): void {
    this.collection.doc(id).delete();
  }
}
