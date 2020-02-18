import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {
  @Input() meta;
  @Input() getWidth;
  @Input() getHeight;
  style = {}

  constructor() { }

  ngOnInit() {
    if (this.getHeight) this.style = { height: `${this.getHeight()}px` }
  }

}
