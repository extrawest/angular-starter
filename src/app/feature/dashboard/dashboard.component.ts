import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  testEvnVar: string = environment.testEvnVar;
  testResolverVar: unknown = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.testResolverVar = this.route.snapshot.data['example'];
  }
}
