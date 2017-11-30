import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { UserRole } from '../user-role';
import { TableRolesService } from '../table-roles.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-table-roles',
  templateUrl: './table-roles.component.html',
  styleUrls: ['./table-roles.component.scss']
})
export class TableRolesComponent implements OnInit {
  public rows: any[];

  constructor(private service: TableRolesService) {
    //
  }

  public ngOnInit() {
    this.rows = [];
    this.service.list()
      .subscribe((data: any[]) => {
        this.rows = _.chain(data)
          .groupBy('role')
          .values()
          .map((v) => _.assignWith.apply(_, v.concat((a, b) => a === b ? a : [a, b].join(', '))))
          .value();
      });
  }
}
