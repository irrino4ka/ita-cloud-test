import { Injectable } from '@angular/core';
import { UserRole } from './user-role';
import { DataService } from './data.service.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataServiceStub implements DataService<any> {

  public list(): Observable<any> {
    return Observable.of([]);
  }

  public add(element: any): void {
    //
  }

  public update(id: string, cell: string, newValue: string): void {
    //
  }

  public delete(userId: string): void {
    //
  }
}
