import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, TranslateModule],
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
