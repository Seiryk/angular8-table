import { Injectable } from '@angular/core';

@Injectable()
export class MatrixService {
  matrix = new Map();

  setItemToMatrix = ({ dataIdx, metaIdx, objForSave }) => {
    let row = this.matrix.get(dataIdx);
    if (!row) {
      row = new Map();
      this.matrix.set(dataIdx, row);
    }
    row.set(metaIdx, objForSave);
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

    return {
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
    }

  }
  constructor() { }
}
