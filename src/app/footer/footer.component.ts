import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  category = [
    'category 1',
    'category 2',
    'category 3',
    'category 4',
    'category 5',
  ]
  toClients = [
    { link: '/change', label: 'Гарантия, обмен, возврат' },
    { link: '/payment', label: 'Оплата' },
    { link: '/delivery', label: 'Доставка' },
    { link: '/discount', label: 'Акции' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
