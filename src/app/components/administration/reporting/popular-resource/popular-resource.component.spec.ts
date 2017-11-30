import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMaterialsModule } from '../../../commons/custom-materials/custom-materials.module';
import { ChartsModule } from 'ng2-charts';

import { PopularResourceComponent } from './popular-resource.component';
import { ReportingService } from '../shared/reporting.service';
import { Observable } from 'rxjs/Observable';

describe('PopularResourceComponent', () => {
  let component: PopularResourceComponent;
  let fixture: ComponentFixture<PopularResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomMaterialsModule,
        ChartsModule,
      ],
      declarations: [ PopularResourceComponent ],
      providers: [
        {
          provide: ReportingService,
          useClass: MockReportingService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' component should create', () => {
    expect(component).toBeTruthy();
  });

  it('methods should be define', () => {
    expect(component.ngOnInit).toBeDefined();
    expect(component.displaySourceData).toBeDefined();
  });

  it('chart data should be sort', () => {
    expect(component.groupResourse()[0].byte).toBeDefined();
    expect(component.groupResourse()[0].resource).toBeDefined();
  });

  it ('popular resource ', () => {
    expect(component.popularResource.resource).toBeDefined();
    expect(component.popularResource.byte).toBeDefined();
  });

  it('chart labels should have data', () => {
    expect(component.doughnutChartLabels).not.toBeNaN();
    expect(component.doughnutChartLabels.length)
    .toEqual(component.doughnutChartData[0].data.length);
  });

  it('chart data', () => {
    expect(component.doughnutChartData[0].data).toBeDefined();
  });

  class MockReportingService  {
    public getUsersData(): Observable<any>  {
      return Observable.of([
        {
          byte: 30,
          resource: 'youtube.com',
          user: 'batman@batmail.com'
        }
      ]);
  }
}

});
