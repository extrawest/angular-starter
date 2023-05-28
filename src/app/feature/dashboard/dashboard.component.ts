import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { NotificationService } from '../../core/services/notification.service';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [JsonPipe, ButtonModule, RouterLink, TranslateModule],
})
export class DashboardComponent implements OnInit {
  testEvnVar: string = environment.testEvnVar;
  testResolverVar: unknown = null;

  constructor(
    private route: ActivatedRoute,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.testResolverVar = this.route.snapshot.data['example'];

    console.log('this is data from resolver: ', this.testResolverVar);
    console.log(
      'this is testEvnVar variable from .env file: ',
      this.testEvnVar,
    );
  }

  onTestError() {
    this.notificationService.errorNotification(
      'error notification',
      'ERROR!!!',
    );
  }

  onTestInfo(): void {
    this.notificationService.infoNotification('info notification');
  }

  onTestSuccess(): void {
    this.notificationService.successNotification('success notification');
  }

  onTestWarn(): void {
    this.notificationService.warnNotification('warn notification');
  }
}
