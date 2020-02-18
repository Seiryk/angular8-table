import { Component, OnInit, Input } from '@angular/core';
import { MatrixService } from '../services/matrix.service';

const VIRTUAL_RESERVE = 100;

@Component({
  selector: 'app-table-body-cell',
  templateUrl: './table-body-cell.component.html',
  styleUrls: ['./table-body-cell.component.scss']
})
export class TableBodyCellComponent implements OnInit {
  @Input() metaItem;
  @Input() dataItem;
  @Input() dataIdx;
  @Input() metaIdx;
  @Input() getWidth;
  @Input() getHeight;
  @Input() tableBodyRef;
  styles = {}
  isRender: Boolean = true
  constructor(
    private matrixService: MatrixService
  ) { }

  shouldRenderCell = ({ top }): Boolean => {
    const { scrollTop, scrollLeft, offsetHeight, offsetWidth } = this.tableBodyRef;
    const minPointY = scrollTop > VIRTUAL_RESERVE ? scrollTop - VIRTUAL_RESERVE : 0;
    const maxPointY = scrollTop + offsetHeight + VIRTUAL_RESERVE;

    return (minPointY <= parseFloat(top)) && (parseFloat(top) <= maxPointY);
  }

  ngDoCheck() {
    const obj = {
      dataIdx: this.dataIdx,
      metaIdx: this.metaIdx,
      dataItem: this.dataItem,
      metaItem: this.metaItem,
    }
    const width = this.getWidth(obj);
    const height = this.getHeight(obj);

    const dataForSet = {
      dataIdx: this.dataIdx,
      metaIdx: this.metaIdx,
      width,
      height,
    }

    const data = this.matrixService.setData(dataForSet)
    this.isRender = this.shouldRenderCell(data);

    this.styles = (width && height) ? data : {};
    }

  ngOnInit() {
    // const obj = {
    //   dataIdx: this.dataIdx,
    //   metaIdx: this.metaIdx,
    //   dataItem: this.dataItem,
    //   metaItem: this.metaItem,
    // }
    // const width = this.getWidth(obj);
    // const height = this.getHeight(obj);

    // const dataForSet = {
    //   dataIdx: this.dataIdx,
    //   metaIdx: this.metaIdx,
    //   width,
    //   height,
    // }

    // const data = this.matrixService.setData(dataForSet)
    // this.isRender = this.shouldRenderCell(data);

    // this.styles = (width && height) ? data : {};
  }

}
