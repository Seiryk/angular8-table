import { Component, OnInit } from '@angular/core';
import { MatrixService } from '../services/matrix.service';

import META from './meta';
import DATA from './data';

const getWidth = (idx, metaItem) => {
   return 130; 
}
const getHeight = () => {
   return 40 
}

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.scss'],
  providers: [MatrixService],
})
export class TableWrapperComponent implements OnInit {
  meta = META;
  data = DATA;
  getWidth = getWidth;
  getHeight = getHeight;
  bodyHeight = 400;
  bodyWidth = 700;

  constructor() { }

  ngOnInit() {

  }

}
