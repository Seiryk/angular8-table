import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'golden-shop';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  onButtonClick() {
    let foo = this.translate.instant('demo.appName', {name: 'gold shop'});
    console.log(foo)
  }
}
