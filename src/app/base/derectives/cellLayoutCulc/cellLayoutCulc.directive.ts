import { Directive, Input, HostListener, ViewContainerRef, TemplateRef, ElementRef, OnInit
} from '@angular/core';

@Directive({
  selector: '[cellLayoutCulc]'
})
export class CellLayoutCulcDirective implements OnInit{
  constructor(
    private el: ElementRef,
  ) {
  }
  ngOnInit () {
  }

  ngAfterContentInit () {
    if (this.el.nativeElement.previousElementSibling) {
      const prevSibl = this.el.nativeElement.previousElementSibling.firstElementChild;
      const prevSiblLeft = parseFloat(prevSibl.style.left) || 0;
      this.el.nativeElement.firstElementChild.style.left = `${prevSibl.offsetWidth + prevSiblLeft}px`;
    }
  }
}
