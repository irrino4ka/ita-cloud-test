import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  public sidebarMenu: any[];

  constructor() {
    this.sidebarMenu = [
      {
        title: 'Users/Roles',
        ico: 'fa fa-user',
        link: 'users/roles',
      },
      {
        title: 'Reporting',
        ico: 'fa fa-area-chart',
        link: 'reporting',
      },
      {
        title: 'Filtering',
        ico: 'fa fa-table',
        link: 'filtering',
      }
    ];
  }
}
