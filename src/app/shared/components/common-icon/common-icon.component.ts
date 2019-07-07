import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-icon',
  templateUrl: './common-icon.component.html',
  styleUrls: ['./common-icon.component.scss']
})
export class CommonIconComponent implements OnInit {

  @Input()
  src: string;

  constructor() { }

  ngOnInit() {
  }
}
