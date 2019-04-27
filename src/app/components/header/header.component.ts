import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

// tslint:disable-next-line: no-input-rename
  @Input('titulo') title: any;

  constructor() { }

  ngOnInit() {
  }

}
