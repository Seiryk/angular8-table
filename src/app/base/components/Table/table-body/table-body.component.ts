import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {
  @Input() meta;
  @Input() data;
  @Input() bodyHeight;
  @Input() bodyWidth;
  @Input() getWidth;
  @Input() getHeight;
  style: any = {}
  scrollY = 0

  constructor() { }

  onScrollHandler = (e) => {
    this.scrollY = e.target.scrollTop
  }

  ngOnInit() {
    this.style = {
      width: this.bodyWidth ? `${this.bodyWidth}px` : '100%',
      height: this.bodyHeight ? `${this.bodyHeight}px` : '50vh',
    }
  }
}
