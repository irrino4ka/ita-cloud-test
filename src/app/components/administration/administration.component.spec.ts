import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdministrationComponent } from './administration.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { AdministrationModule } from './administration.module';
import { ReportingModule } from './reporting/shared/reporting.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { UsersRolesTableModule } from './users-roles-table/users-roles-table.module';
import { FilteringModule } from './filtering/filtering.module';
import { TranslateModule } from '@ngx-translate/core';

describe('AdministrationComponent', () => {
  let component: AdministrationComponent;
  let fixture: ComponentFixture<AdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationComponent],
      imports: [
        RouterTestingModule,
        ReportingModule,
        UsersRolesTableModule,
        FilteringModule,
        SidebarModule,
        TranslateModule.forRoot()
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create administration', () => {
    expect(component).toBeTruthy();
  });

});
