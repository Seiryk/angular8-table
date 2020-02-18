import { Component, OnInit, Input, OnDestroy, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'picklist-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
  @ViewChild('wrappUl', { static: true }) wrappUl;
  @Input() data: any = [];
  @Input() onDocClick: any;
  @Input() intersectionCallback: any;
  hovered = Infinity
  openToRight = true;

  constructor() {
  }

  _intersectionCallback = (function (entries, observer) {
    console.log('!intersectionRatio', entries[0])
    // this.openToRight = entries[0].intersectionRatio === 1;
  }).bind(this);


  ngOnInit() {
    if (this.onDocClick) document.addEventListener('click', this.onDocClick)
    let options = {
      root: document.querySelector('body'),
      rootMargin: '0px',
      threshold: 1.0
    }

    if (this.intersectionCallback) {
      let observer = new IntersectionObserver(this._intersectionCallback, options);
      observer.observe(this.wrappUl.nativeElement);
    }

  }



  ngOnDestroy() {
    if (this.onDocClick) document.removeEventListener('click', this.onDocClick)
  }

  onMouseEnter = (idx: number) => {
    this.hovered = idx
  }
}
