import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})

export class SimpleTableComponent implements  OnChanges {
    @Input() public tableRows;
    @Input() public tableColumns;
    @Input() public loadIndicator;

    public reorderable: boolean;
    public loadingIndicator: boolean;
    public rows: any[];
    public columns: any[];

    public ngOnChanges() {
        this.reorderable = true;
        this.loadingIndicator = this.loadIndicator;
        this.rows = this.tableRows;
        this.columns = this.tableColumns;
    }

}
