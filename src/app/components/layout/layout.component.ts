import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  barValue = '75%';

  @ViewChild('bgimg', {static: false}) inner: ElementRef;
  @ViewChild('numbox', {static: false}) numbox: ElementRef;

  @HostListener('window:resize', ['$event.target'])
  onResize() {
    this.resize();
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.resize();
  }

  private resize() {
    console.log(this.inner);
    const height = this.inner.nativeElement.clientHeight;
    const width = this.inner.nativeElement.clientWidth;
    this.inner.nativeElement.style.backgroundSize = `${width}px ${height}px`;
    this.numbox.nativeElement.style.top = `calc(50% - ${height / 2 + 4}px)`;
  }

  onClick() {
    this.barValue = Math.floor(Math.random() * (100 - 10) + 10) + '%';
  }
}
