import { TestBed, inject } from '@angular/core/testing';
import { AngularFirestore } from 'angularfire2/firestore';
import { CurrentUser } from './current-user.model';
import { CurrentUserServiceImp } from './current-user.service';
import { AngularFirestoreMock } from './firestore.service.mock';
import Spy = jasmine.Spy;
import {
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

describe('DialogService', () => {
    let service: CurrentUserServiceImp;
    let afs: AngularFirestoreMock;
    let updateDocumentSpy: Spy;
    let valueChangeDocumentSpy: Spy;

    const user: CurrentUser = {
        name: 'Marc',
        description: 'something',
        date: '01/03/2017',
        choice: 'Only Email to Recipients',
        language: 'English'
    };

    beforeEach(() => {
        updateDocumentSpy = jasmine.createSpy('document update');
        valueChangeDocumentSpy =  jasmine.createSpy('value is changed');
        afs = new AngularFirestoreMock(user, updateDocumentSpy, valueChangeDocumentSpy);
        service = new CurrentUserServiceImp(afs as AngularFirestore);
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('updates user', () => {
        expect(updateDocumentSpy.calls.count()).toBe(0);
        expect(valueChangeDocumentSpy).toHaveBeenCalled();
        expect(valueChangeDocumentSpy.calls.count()).toBe(1);

        user.name = 'Marcus';

        service.update(user);

        expect(updateDocumentSpy).toHaveBeenCalled();
        expect(updateDocumentSpy.calls.count()).toBe(1);
        expect(valueChangeDocumentSpy.calls.count()).toBe(1);
    });
});
