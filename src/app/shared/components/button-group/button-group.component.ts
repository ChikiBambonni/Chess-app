import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { ButtonInterface } from './button-group.interfaces';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {

  @Input()
  selectedValue: string;

  @Input()
  buttonList: ButtonInterface<string>[];

  @Output()
  selectedChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  buttonClick(value: string) {
    if (this.selectedValue !== value) {
      this.selectedChange.emit(value);
    }
  }
}
