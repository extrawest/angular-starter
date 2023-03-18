import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  testEvnVar: string = environment.testEvnVar;

  constructor() {}

  ngOnInit(): void {
    console.log('DashboardComponent');
  }
}
