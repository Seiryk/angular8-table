import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-body-row',
  templateUrl: './table-body-row.component.html',
  styleUrls: ['./table-body-row.component.scss']
})
export class TableBodyRowComponent implements OnInit {
  @Input() dataItem;
  @Input() dataIdx;
  @Input() getWidth;
  @Input() getHeight;
  @Input() meta;
  @Input() tableBodyRef;
  constructor() { }

  ngOnInit() {
  }

}
