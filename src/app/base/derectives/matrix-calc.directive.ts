import { Directive, Input, HostListener, ViewContainerRef, TemplateRef, ElementRef, OnInit
} from '@angular/core';
import { MatrixService } from '../components/Table/services/matrix.service';


@Directive({
  selector: '[appMatrixCalcHeight]'
})
export class MatrixCalcDirective implements OnInit{
  rows = {};
  constructor(
    private el: ElementRef,
    private matrixService: MatrixService,
  ) {
    matrixService.increaseHeightSubj.subscribe((height) => {
      this.el.nativeElement.style.height = `${height}px`;

    })
  }
  ngOnInit () {
    
  }

}
