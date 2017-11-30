import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { UserData } from '../shared/reporting';
import { ReportingService } from '../shared/reporting.service';
import {
  LineChartData,
  LineChartOptions,
  GroupResourse
} from './user-count.interface';

@Component({
  selector: 'app-users-count',
  templateUrl: './users-count.component.html',
  styleUrls: ['./users-count.component.scss']
})

export class UsersCountComponent implements OnInit {
  public showSpinner: boolean;
  public data: Observable<UserData>;
  public usersData: UserData[];
  public lineChartData: LineChartData[];
  public lineChartLabels: string[];
  public lineChartOptions: LineChartOptions;
  public lineChartLegend: boolean;

  constructor(private reportingService: ReportingService) {}

  public ngOnInit() {
    this.data = this.reportingService.getUsersData();
    this.usersData = [];
    this.showSpinner = true;
    this.lineChartData = [{ data: [], label: 'Users' }];
    this.lineChartLabels = [];
    this.displayResourseData();
    this.lineChartSettings();
  }

  public displayResourseData(): void {
    this.data.subscribe((data) => {
      this.showSpinner = false;
      this.usersData = this.usersData.concat(data);
      this.displayLineChartData(this.groupResourse());
      this.displayLineChartLabels(this.groupResourse());
    });
  }

  public groupResourse(): GroupResourse[] {
    return _(this.usersData)
      .groupBy('resource')
      .map((resource, id) => ({
        resource: id,
        user_count: _.size(_.countBy(resource, 'user'))
      }))
      .value();
  }

  public displayLineChartData(data: GroupResourse[]): void {
    const lineChartData = _.map(data, 'user_count');
    this.lineChartData[0].data = this.lineChartData[0].data.concat(
      lineChartData
    );
  }

  public displayLineChartLabels(data: GroupResourse[]): void {
    const lineChartLabels = _.map(data, 'resource');
    this.lineChartLabels = this.lineChartLabels.concat(lineChartLabels);
  }

  public lineChartSettings(): void {
    this.lineChartOptions = {
      responsive: true
    };
    this.lineChartLegend = false;
  }
}
