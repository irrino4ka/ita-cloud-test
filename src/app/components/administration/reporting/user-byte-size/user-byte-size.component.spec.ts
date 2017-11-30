import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomMaterialsModule } from '../../../commons/custom-materials/custom-materials.module';
import { ChartsModule } from 'ng2-charts';

import { UserByteSizeComponent } from './user-byte-size.component';
import { ReportingService } from '../shared/reporting.service';
import { Observable } from 'rxjs/Observable';

describe('UserByteSizeComponent', () => {
  let component: UserByteSizeComponent;
  let fixture: ComponentFixture<UserByteSizeComponent>;

  beforeEach(
    async(() =>
      TestBed.configureTestingModule({
        imports: [CustomMaterialsModule, ChartsModule],
        declarations: [UserByteSizeComponent],
        providers: [
          { provide: ReportingService, useClass: MockReportingService }
        ]
      })
    )
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserByteSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component should create', () => {
    expect(component).toBeTruthy();
  });

  it('methods should be define', () => {
    expect(component.ngOnInit).toBeDefined();
    expect(component.displayUsersData).toBeDefined();
    expect(component.displayBarChartData).toBeDefined();
  });

  it('chart data should be sort', () => {
    expect(component.sortData()).toEqual(component.usersData);
    expect(component.sortData().length).toBeLessThan(10);
  });

  it('chart data should be less 10', () => {
    expect(component.barChartData[0].label).toBeDefined();
    expect(component.barChartData[0].label).toEqual('gb');
    expect(component.barChartData[0].data).toBeDefined();
    expect(component.barChartData[0].data.length).toBeLessThan(10);
  });

  it('chart labels should have data', () => {
    expect(component.barChartLabels.length).toBeLessThan(10);
    expect(component.barChartLabels.length).toEqual(
      component.barChartData[0].data.length
    );
  });

  it('table data', () => {
    expect(component.dataSource.data.length).toBeLessThan(10);
    expect(component.dataSource.data[0].byte).toBeDefined();
    expect(component.dataSource.data[0].resource).toBeDefined();
    expect(component.dataSource.data[0].user).toBeDefined();
  });

  class MockReportingService {
    public getUsersData(): Observable<any> {
      return Observable.of([
        { byte: 30, resource: 'youtube.com', user: 'batman@batmail.com' }
      ]);
    }
  }
});
