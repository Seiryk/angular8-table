import { Component, OnInit, ViewChild } from '@angular/core';

const data = [
  {
    label: 'label 1',
    items: [
      {
        label: 'label 1'
      },
      {
        label: 'label 2',
        items: [
          {
            label: 'label 1'
          },
          {
            label: 'label 2',
            items: [
              {
                label: 'label 1'
              },
              {
                label: 'label 2',
                items: [
                  {
                    label: 'label 1',
                    items: [
                      {
                        label: 'label 1'
                      },
                      {
                        label: 'label 2'
                      },
                    ]
                  },
                  {
                    label: 'label 2',
                    items: [
                      {
                        label: 'label 1'
                      },
                      {
                        label: 'label 2'
                      },
                    ]
                  },
                ]
              },
            ]
          },
          
        ]
      },
    ]
  },
  {
    label: 'label 2'
  },
  {
    label: 'label 3'
  },
  {
    label: 'label 4'
  },
  {
    label: 'label 5',
    items: [
      {
        label: 'label 1'
      },
      {
        label: 'label 2'
      },
    ]
  },
]

@Component({
  selector: 'app-picklist',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.scss']
})
export class PicklistComponent implements OnInit {
  data = data;
  isOpen: boolean = false
  @ViewChild('picklist', {static: true}) picklist; 

  constructor() { }

  ngOnInit() {
  }

  onInputClick = () => {
    this.isOpen = true
  }

  onDocClick = (e) => {
    const isOutsideClicked = e.path.includes(this.picklist.nativeElement);
    if (!isOutsideClicked) this.isOpen = false;
  }

}
