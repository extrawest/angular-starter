import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, SharedModule } from 'primeng/api';
import { UpperCasePipe } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

interface Language {
  name: string;
  code: string;
}

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    SharedModule,
    MenuModule,
    SidebarModule,
    UpperCasePipe,
  ],
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
  currentLanguage: Language | null = null;

  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    // ! calculate current language from local storage
    const currentLanguage: string | null =
      localStorage.getItem('currentLanguage');

    if (currentLanguage) {
      this.currentLanguage =
        this.languages.find(
          (language: Language) => language.code === currentLanguage,
        ) ?? this.languages[0];
    }

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

    this.translate.onLangChange.pipe(untilDestroyed(this)).subscribe(() => {
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

  changeLanguage($event: { originalEvent: Event; value: Language }): void {
    this.translate.use($event.value.code);
    localStorage.setItem('currentLanguage', $event.value.code);
  }
}
