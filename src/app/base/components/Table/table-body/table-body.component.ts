import { Component, OnInit, Input } from '@angular/core';
import debounce from 'lodash/debounce';
import { MatrixService } from '../services/matrix.service';


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
  newData: any = []
  rows = {};


  constructor(
    private matrixService: MatrixService

  ) {

  }

  getNewData = (scrollTop) => {
    const d = this.matrixService.getItemToScrollMatrix(scrollTop, this.bodyHeight)

    this.newData  = d
  }

  // onScrollHandler = (e) => {
  //   this.getNewData(e.target.scrollTop)
  // }
  onScrollHandler = debounce((e) => {
    this.getNewData(e.target.scrollTop)
    console.log('object')
  }, 50)

  shouldRender = () => {
    
  }

  ngOnInit() {
    this.style = {
      width: this.bodyWidth ? `${this.bodyWidth}px` : '100%',
      height: this.bodyHeight ? `${this.bodyHeight}px` : '50vh',
    }
    let hheight = 0;
    let top = 0
    this.data.forEach((dataItem, dataIndex) => {

      this.meta.forEach((metaItem, metaIndex) => {
        const obj = {
          dataIdx: dataIndex,
          metaIdx: metaIndex,
          dataItem: dataItem,
          metaItem: metaItem,
        }
  
        const width = this.getWidth(obj);
        const height = this.getHeight(obj);
    
        const dataForSet = {
          dataIdx: dataIndex,
          metaIdx: metaIndex,
          width,
          height,
        }
        if (!this.rows[dataIndex]) {
          this.rows[dataIndex] = true;
          hheight += height
        }
        
        const d = this.matrixService.setData(dataForSet)
        top = d.top;
      })
      const forSave = { ...dataItem, dataIndex }
      this.matrixService.setItemToScrollMatrix(forSave, this.bodyHeight, top)

    });
    this.matrixService.increaseHeightSubj.next(hheight)
    this.getNewData(0)
  }
}
