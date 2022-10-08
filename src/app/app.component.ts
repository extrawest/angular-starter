import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const currentLanguage: string | null =
      localStorage.getItem('currentLanguage');

    if (currentLanguage) {
      translate.use(currentLanguage);
    } else {
      translate.setDefaultLang('en');
      translate.use('en');
      localStorage.setItem('currentLanguage', 'en');
    }
  }
}
