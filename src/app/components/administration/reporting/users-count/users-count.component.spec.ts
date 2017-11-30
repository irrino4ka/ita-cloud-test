import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomMaterialsModule } from '../../../commons/custom-materials/custom-materials.module';
import { ChartsModule } from 'ng2-charts';

import { UsersCountComponent } from '../users-count/users-count.component';
import { ReportingService } from '../shared/reporting.service';
import { Observable } from 'rxjs/Observable';

describe('ResourceComponent', () => {
  let component: UsersCountComponent;
  let fixture: ComponentFixture<UsersCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomMaterialsModule,
        ChartsModule,
      ],
      declarations: [ UsersCountComponent ],
      providers: [
        { provide: ReportingService, useClass: MockReportingService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be define', () => {
    expect(component.ngOnInit).toBeDefined();
    expect(component.displayResourseData).toBeDefined();
    expect(component.lineChartSettings).toBeDefined();
  });

  it('group resourse', () => {
      expect(component.groupResourse()[0].resource).toBeDefined();
      expect(component.groupResourse()[0].user_count).toBeDefined();
  });

  it('chart data', () => {
    expect(component.lineChartData[0].label).toBeDefined();
    expect(component.lineChartData[0].label).toEqual('Users');
    expect(component.lineChartData[0].data).toBeDefined();
  });

  it('chart labels should have data', () => {
    expect(component.lineChartLabels).not.toBeNaN();
    expect(component.lineChartLabels.length)
    .toEqual(component.lineChartData[0].data.length);
  });

  class MockReportingService  {
    public getUsersData(): Observable<any>  {
      return Observable.of([
        {byte: 30, resource: 'youtube.com', user: 'batman@batmail.com'}
      ]);
  }
}

});
