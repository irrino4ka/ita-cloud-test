import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { ReportingService } from '../shared/reporting.service';
import { UserData } from '../shared/reporting';
import {
  PopularResource,
  DoughnutChartData,
  GroupResourse,
  PopularResourceConst
} from './popular-resource.interface';

@Component({
  selector: 'app-popular-resource',
  templateUrl: './popular-resource.component.html',
  styleUrls: ['./popular-resource.component.scss']
})

export class PopularResourceComponent implements OnInit {
  public showSpinner: boolean;
  public data: Observable<UserData>;
  public usersData: UserData[];
  public popularResource: PopularResource;
  public doughnutChartLabels: string[];
  public doughnutChartData: DoughnutChartData[];
  public doughnutChartType: string;

  constructor(private reportingService: ReportingService) {}

  public ngOnInit() {
    this.data = this.reportingService.getUsersData();
    this.usersData = [];
    this.showSpinner = true;
    this.doughnutChartData = [{ data: [] }];
    this.doughnutChartLabels = [];
    this.displaySourceData();
  }

  public displaySourceData(): void {
    this.data.subscribe((data) => {
      this.usersData = this.usersData.concat(data);
      this.showSpinner = false;
      this.maxSource(this.groupResourse());
      this.displayDoughnutChartLabels(this.groupResourse());
      this.displayDoughnutChartData(this.groupResourse());
    });
  }

  public groupResourse(): GroupResourse[] {
    return _(this.usersData)
      .groupBy('resource')
      .map((resource, id) => ({
        resource: id,
        byte: _.sumBy(resource, 'byte')
      }))
      .value();
  }

  private maxSource(data: GroupResourse[]): void {
    this.popularResource = _.maxBy(data, 'byte');
  }

  private displayDoughnutChartLabels(data: GroupResourse[]): void {
    const doughnutChartLabels = _.map(data, 'resource');
    this.doughnutChartLabels = this.doughnutChartLabels.concat(doughnutChartLabels);
  }

  private displayDoughnutChartData(data: GroupResourse[]): void {
    const doughnutChartData = _.map(data, 'byte');
    this.doughnutChartData[0].data = this.doughnutChartData[0].data.concat(doughnutChartData);
  }
}
