import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  testEvnVar: string = process.env.NG_APP_TEST_VAR;

  constructor() {}

  ngOnInit(): void {
    console.log('DashboardComponent');
  }
}
