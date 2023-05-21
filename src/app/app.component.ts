import { Component, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NotificationService } from './core/services/notification.service';

// ! You can use it for dependency injection (DI) without constructor everywhere
export let AppInjector: Injector;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, ToastModule],
  providers: [MessageService, NotificationService],
})
export class AppComponent {
  constructor(private injector: Injector, private translate: TranslateService) {
    AppInjector = this.injector;

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
