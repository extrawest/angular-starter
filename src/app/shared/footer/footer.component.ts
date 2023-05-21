import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [ToolbarModule, TranslateModule],
})
export class FooterComponent {
  constructor() {}
}
