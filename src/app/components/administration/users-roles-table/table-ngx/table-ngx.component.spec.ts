import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableNgxComponent } from './table-ngx.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataServiceStub } from '../data.service.stub';
import { UserRoleService } from '../user-role.service';
import { MatDialog } from '@angular/material';
import { UserRole } from '../user-role';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TABLE_CONST, tableConst } from '../table.const';
import { TableConst } from '../table.const.interface';
import { CustomMaterialsModule } from '../../../commons/custom-materials/custom-materials.module';

describe('TableNgxComponent', () => {
  let component: TableNgxComponent;
  let fixture: ComponentFixture<TableNgxComponent>;
  const selectedUsers: any = [
    { user: 'Samsung-NT', status: 'Active', role: 'Guest' },
    { user: 'Elvis34', status: 'Disabled', role: 'User' },
    { user: 'Ringo Star', status: 'Active', role: 'Admin' }
  ];
  const updatedSelectedUsers: any = [
    { user: 'Samsung-NT', status: 'Active', role: 'Guest' }
  ];

  let service: DataServiceStub;

  beforeEach(async(() => {

    service = new DataServiceStub();

    TestBed.configureTestingModule({
      imports: [CustomMaterialsModule, NgxDatatableModule],
      declarations: [TableNgxComponent],
      providers: [
        {
          provide: UserRoleService,
          useValue: service
        },
        {
          provide: MatDialog,
          useClass: MatDialogStub
        },
        {
          provide: TABLE_CONST,
          useValue: tableConst
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create table-ngx component', () => {
    expect(component).toBeTruthy();
  });

  it('sets class for user', () => {
    expect(component.setClasses('Active'))
      .toEqual('active-user');

    expect(component.setClasses('Active'))
      .not.toEqual('inactive-user');

    expect(component.setClasses('Disabled'))
      .toEqual('inactive-user');
  });

  it('sets class isValid', () => {
    expect(component.setClassValid(true))
      .toBe('show');

    expect(component.setClassValid(true))
      .not.toEqual('hide');
  });

  it('sets class Show', () => {
    component.selected.length = 5;
    expect(component.setClassesShow())
      .toBe('show');

    component.selected.length = 0;
    expect(component.setClassesShow())
      .not.toBe('show');
  });

  it('creates array with selected values', () => {
    component.onSelect({ selected: selectedUsers });
    expect(component.selected.length).toBe(3);
    expect(component.selected).toEqual(selectedUsers);

    component.onSelect({ selected: updatedSelectedUsers });
    expect(component.selected.length).toBe(1);
    expect(component.selected).toEqual(updatedSelectedUsers);
  });

  it('updates value with inline editing', () => {
    const event = {
      target: {
        value: 'test value',
        checkValidity() { return true; }
      }
    };
    const cell = 3;
    const rowIndex = 1;
    const id = 'rwerw';
    component.rows[rowIndex] = {};
    spyOn(service, 'update');

    component.updateValue(event, cell, rowIndex, id);

    expect(component.editing[`${rowIndex}-${cell}`]).toBe(false);
    expect(component.rows[rowIndex][cell]).toEqual(event.target.value);
    expect(service.update).toHaveBeenCalled();
  });

  it('won\'t update value when validation is failed', () => {
    const event = {
      target: {
        value: 'test value',
        checkValidity() { return false; }
      }
    };
    const cell = 3;
    const rowIndex = 1;
    const id = 'rwerw';
    component.rows[rowIndex] = {};
    spyOn(service, 'update');
    component.updateValue(event, cell, rowIndex, id);
    expect(component.rows[rowIndex].isInvalid).toBe(true);
    expect(service.update).not.toHaveBeenCalled();
  });

  it('opens delete dialog', () => {
    spyOn(service, 'delete');
    component.openDialog();
    expect(service.delete).toHaveBeenCalled();
    expect(service.delete).toHaveBeenCalledWith('1');
  });
});

class MatDialogStub extends MatDialog {

  private user: UserRole = {
    user: 'test user',
    role: 'admin',
    status: 'active',
    id: '1'
  };

  public open(componentOrTemplateRef: any, config?: any): any {
    const user = this.user;
    return {
      afterClosed() {
        return Observable.of([user]);
      }
    };
  }
}
