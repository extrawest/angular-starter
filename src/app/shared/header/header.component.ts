import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    console.log('HeaderComponent');
  }

  goToHomePage(): void {
    this.router.navigate(['/dashboard']);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('currentLanguage', language);
  }
}
