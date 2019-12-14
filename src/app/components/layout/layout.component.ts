import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  barValue = 75;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.barValue = Math.floor(Math.random() * (100 - 10) + 10);
  }
}
