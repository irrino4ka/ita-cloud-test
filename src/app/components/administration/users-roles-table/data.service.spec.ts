import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { UserRole } from './user-role';
import { DataServiceImpl } from './data.service';
import { AngularFirestoreMock } from './angular-firestore.service.mock';
import Spy = jasmine.Spy;

describe('DataService', () => {

  let service: DataServiceImpl<UserRole>;
  let collection: AngularFirestoreCollection<UserRole>;
  let updateDocumentSpy: Spy;
  let deleteDocumentSpy: Spy;

  const user: UserRole = {
    user: 'test user',
    role: 'admin',
    status: 'active',
    isInvalid: true
  };

  beforeEach(() => {
    updateDocumentSpy = jasmine.createSpy('document update');
    deleteDocumentSpy = jasmine.createSpy('document delete');

    const afs: AngularFirestoreMock<UserRole> =
      new AngularFirestoreMock(user, updateDocumentSpy, deleteDocumentSpy);

    collection = afs.collection('');
    service = new DataServiceImpl(collection);
  });

  it('returns list of users with ids set', () => {
    expect(user.id).toBe(undefined);
    service.list().subscribe((userRoles: UserRole[]) => {
      expect(userRoles).toEqual(jasmine.any(Array));
      expect(userRoles.length).toEqual(1);
      expect(userRoles[0]).toBe(user);
      expect(userRoles[0].id).toBe('1');
    });
  });

  it('adds user to the database', () => {
    const addSpy = jasmine.createSpy('add');
    collection.add = addSpy;
    service.add(user);
    expect(addSpy).toHaveBeenCalledWith(user);
    expect(addSpy.calls.count()).toBe(1);
  });

  it('updates user', () => {
    expect(updateDocumentSpy.calls.count()).toBe(0);
    service.update('1', 'role', 'admin');
    expect(updateDocumentSpy).toHaveBeenCalled();
    expect(updateDocumentSpy.calls.count()).toBe(1);
  });

  it('deletes user by id', () => {
    expect(deleteDocumentSpy.calls.count()).toBe(0);
    service.delete('1');
    expect(deleteDocumentSpy).toHaveBeenCalled();
    expect(deleteDocumentSpy.calls.count()).toBe(1);
  });
});
