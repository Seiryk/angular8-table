import { Component, OnInit, Input } from '@angular/core';
import { MatrixService } from '../services/matrix.service';


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
  styles = {}
  constructor(
    private matrixService: MatrixService
  ) {

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
