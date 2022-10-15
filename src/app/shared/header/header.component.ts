import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

interface Language {
  name: string;
  code: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  display: boolean = false;

  // TODO: create translation service
  languages: Language[] = [
    {
      code: 'uk',
      name: 'UK',
    },
    {
      code: 'en',
      name: 'EN',
    },
  ];
  currentLanguage: Language = {
    code: 'uk',
    name: 'UK',
  };

  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: this.translate.instant('test.settings.personalSettings'),
        items: [
          {
            label: this.translate.instant('test.settings.profile'),
            icon: 'c-icons second-icon',
            command: (): void => {
              console.log('This is Profile settings button');
            },
          },
          {
            label: this.translate.instant('test.settings.myAccount'),
            icon: 'c-icons first-icon',
            command: (): void => {
              console.log('This is My account settings button');
            },
          },
        ],
      },
    ];

    // TODO: implement unsubscribe
    this.translate.onLangChange.pipe().subscribe(() => {
      this.items = [
        {
          label: this.translate.instant('test.settings.personalSettings'),
          items: [
            {
              label: this.translate.instant('test.settings.profile'),
              icon: 'c-icons second-icon',
              command: (): void => {
                console.log('This is Profile settings button');
              },
            },
            {
              label: this.translate.instant('test.settings.myAccount'),
              icon: 'c-icons first-icon',
              command: (): void => {
                console.log('This is My account settings button');
              },
            },
          ],
        },
      ];
    });
  }

  goToHomePage(): void {
    this.router.navigate(['/dashboard']);
  }

  openSideBar(): void {
    this.display = true;
  }

  changeLanguage($event: {
    originalEvent: PointerEvent;
    value: Language;
  }): void {
    this.translate.use($event.value.code);
    localStorage.setItem('currentLanguage', $event.value.code);
  }
}
