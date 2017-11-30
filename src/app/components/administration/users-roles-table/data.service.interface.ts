import { Observable } from 'rxjs/Observable';

export interface DataService<T> {
  list(): Observable<any[]>;
  add(user: T): void;
  update(id: string, cell: string, newValue: string): void;
  delete(userId: string): void;
}
