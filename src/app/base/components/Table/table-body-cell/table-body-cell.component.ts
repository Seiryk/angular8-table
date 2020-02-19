import { Component, OnInit, Input } from '@angular/core';
import { MatrixService } from '../services/matrix.service';

const VIRTUAL_RESERVE = 0;

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
  @Input() bodyHeight;
  styles = {}
  constructor(
    private matrixService: MatrixService
  ) {

  }

  shouldRenderCell = ({ top }): Boolean => {
    const { scrollTop, scrollLeft, offsetHeight, offsetWidth } = this.tableBodyRef;
    const minPointY = scrollTop > VIRTUAL_RESERVE ? scrollTop - VIRTUAL_RESERVE : 0;
    const maxPointY = scrollTop + offsetHeight + VIRTUAL_RESERVE;

    return (minPointY <= parseFloat(top)) && (parseFloat(top) <= maxPointY);
  }

  wrappWithPx = ({left, top, width, height}) => ({
    left: `${left}px`,
    top: `${top}px`,
    width: `${width}px`,
    height: `${height}px`,
  })

  ngDoCheck() {
    const dataForGet = {
      dataIdx: this.dataIdx,
      metaIdx: this.metaIdx,
    }

    const data = this.matrixService.getData(dataForGet)
    this.styles = this.wrappWithPx(data);
    }

  ngOnInit() {
    console.log('init')
  }

}
