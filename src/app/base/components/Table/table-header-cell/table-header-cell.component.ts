import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-header-cell',
  templateUrl: './table-header-cell.component.html',
  styleUrls: ['./table-header-cell.component.scss']
})
export class TableHeaderCellComponent implements OnInit {
  @Input() metaItem;
  @Input() index;
  @Input() getWidth;
  @Input() getHeight;
  styles = {}
  constructor() { }

  ngOnInit() {
    const width = this.getWidth(this.index, this.metaItem);
    // const width = this.getHeight(this.index, this.metaItem);
    this.styles = width ? {
      width: width + 'px',
      height: this.getHeight() + 'px',
    } : {};
  }

}
