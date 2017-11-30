import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmp-ita-header',
  templateUrl: './ita-header.component.html',
  styleUrls: ['./ita-header.component.scss']
})
export class ItaHeaderComponent implements OnInit {
  // Test input data from app.component will be displayed in header;
  @Input()
  public itaTitle: string;
  constructor() {
    // TODO
  }

  public ngOnInit() {
    // TODO
  }

}
