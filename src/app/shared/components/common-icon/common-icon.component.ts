import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-common-icon',
  templateUrl: './common-icon.component.html',
  styleUrls: ['./common-icon.component.scss']
})
export class CommonIconComponent implements OnInit {

  @Input()
  src: string;

  @Input()
  width: number;

  @Input()
  height: number;

  @Output()
  imgEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  imgClick() {
    this.imgEvent.emit(null);
  }
}
