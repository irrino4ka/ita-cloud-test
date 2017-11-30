import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRolesComponent } from './table-roles.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataServiceStub } from '../data.service.stub';
import { TableRolesService } from '../table-roles.service';
import { CustomMaterialsModule } from '../../../commons/custom-materials/custom-materials.module';

describe('TableRolesComponent', () => {
  let component: TableRolesComponent;
  let fixture: ComponentFixture<TableRolesComponent>;
  let service: DataServiceStub;

  beforeEach(async(() => {

    service = new DataServiceStub();

    TestBed.configureTestingModule({
      imports: [CustomMaterialsModule, NgxDatatableModule],
      declarations: [TableRolesComponent],
      providers: [
        {
          provide: TableRolesService,
          useValue: service
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
