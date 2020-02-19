import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MatrixService {
  matrix = new Map();
  scrollMatrix = new Map();

  setItemToMatrix = ({ dataIdx, metaIdx, objForSave }) => {
    let row = this.matrix.get(dataIdx);
    if (!row) {
      row = new Map();
      this.matrix.set(dataIdx, row);
    }
    row.set(metaIdx, objForSave);
  }

  setItemToScrollMatrix = (dataItem, bodyHeight, top) => {
    const position = Math.floor(top / bodyHeight);
    const existed = this.scrollMatrix.get(position) || []
    existed.push(dataItem);
    this.scrollMatrix.set(position, existed)
  }
  getItemToScrollMatrix = (scrollTop, bodyHeight) => {
    const position = Math.floor(scrollTop / bodyHeight);
    const prev = this.scrollMatrix.get(position - 1) || []
    const current = this.scrollMatrix.get(position) || []
    const next = this.scrollMatrix.get(position + 1) || []
    
    return [...prev, ...current, ...next]
    // return current
  }

  getData = ({ dataIdx, metaIdx }) => {
    const row = this.matrix.get(dataIdx);
    return row.get(metaIdx);
  }

  getPrevItems = ({ dataIdx, metaIdx }) => {
    let topItem = null;
    let leftItem = null;

    if (dataIdx) {
      const rowIdx = dataIdx - 1;
      const row = this.matrix.get(rowIdx);
      topItem = row.get(metaIdx);
    }
    if (metaIdx) {
      const columnIdx = metaIdx - 1;
      const row = this.matrix.get(dataIdx);
      leftItem = row.get(columnIdx);
    }

    return { leftItem, topItem };
  }

  getPosition = (arg) => {
    const { leftItem, topItem } = this.getPrevItems(arg)
    let top = 0, left = 0;
    if (topItem) top = topItem.top + topItem.height;
    if (leftItem) left = leftItem.left + leftItem.width;

    return { left, top };
  }

  setData = (arg) => {
    const { dataIdx, metaIdx, width, height } = arg;
    const { left, top } = this.getPosition({ dataIdx, metaIdx })
    const objForSave = { left, top, width, height };
    this.setItemToMatrix({ dataIdx, metaIdx, objForSave });

    return objForSave

  }



  //--------
  increaseHeightSubj = new Subject();
  scrollSubj = new Subject();
  constructor() { 

  }
}
