import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { ReportingService } from '../shared/reporting.service';
import { UserData } from '../shared/reporting';
import {
  BarChartDataData,
  BarChartOptions,
  SortData
} from './user-byte-size.interface';

@Component({
  selector: 'app-user-byte-size',
  templateUrl: './user-byte-size.component.html',
  styleUrls: ['./user-byte-size.component.scss']
})

export class UserByteSizeComponent implements OnInit {
  public showSpinner: boolean;
  public data: Observable<UserData>;
  public usersData: UserData[];
  public dataSource: MatTableDataSource<SortData>;
  public displayedColumns: string[];
  public barChartLabels: string[];
  public barChartData: BarChartDataData[];
  public barChartLegend: boolean;
  public barChartOptions: BarChartOptions;

  constructor(private reportingService: ReportingService) {}

  public ngOnInit() {
    this.data = this.reportingService.getUsersData();
    this.usersData = [];
    this.showSpinner = true;
    this.barChartLabels = [];
    this.barChartData = [{ data: [], label: 'gb' }];
    this.displayedColumns = ['user', 'resource', 'byte'];
    this.barChartSettings();
    this.displayUsersData();
  }

  public displayUsersData(): void {
    this.data.subscribe((data) => {
      this.usersData = this.usersData.concat(data);
      this.showSpinner = false;
      this.displayTableData(this.sortData());
      this.displayBarChartData(this.sortData());
      this.displayBarChartLabelss(this.sortData());
    });
  }

  public sortData(): SortData[] {
    let sortData;
    sortData = _.orderBy(this.usersData, 'byte', ['asc']);
    return _.takeRight(sortData, 10);
  }

  public displayBarChartData(data: SortData[]): void {
    const barChartData = _.map(data, 'byte');
    this.barChartData[0].data = this.barChartData[0].data.concat(barChartData);
  }

  private displayBarChartLabelss(data: SortData[]): void {
    const barChartLabelss = _.map(data, 'user');
    this.barChartLabels = this.barChartLabels.concat(barChartLabelss);
  }

  private displayTableData(data: SortData[]): void {
    this.dataSource = new MatTableDataSource<SortData>(data);
  }

  private barChartSettings(): void {
    this.barChartLegend = false;
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      scales: {
        yAxes: [{
            ticks: {beginAtZero: true}
          }],
        xAxes: [{
          ticks: {autoSkip: false}
        }]
      }
    };
  }

}
