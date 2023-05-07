import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [JsonPipe],
})
export class DashboardComponent implements OnInit {
  testEvnVar: string = environment.testEvnVar;
  testResolverVar: unknown = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.testResolverVar = this.route.snapshot.data['example'];

    console.log('this is data from resolver: ', this.testResolverVar);
    console.log(
      'this is testEvnVar variable from .env file: ',
      this.testEvnVar,
    );
  }
}
