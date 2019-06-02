import { Color } from 'chessground/types';
import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges } from '@angular/core';
import { Chessground } from 'chessground';
import { Api } from 'chessground/api';

@Component({
  selector: 'app-chessground-static',
  templateUrl: './chessground-static.component.html',
  styleUrls: ['./chessground-static.component.scss']
})
export class ChessgroundStaticComponent implements OnInit, OnChanges {

  @Input()
  width: number;

  @Input()
  height: number;

  @Input()
  zoom: number;

  @Input()
  orientation: Color;

  @Input()
  fen: string;

  @ViewChild('chessBoard')
  chessBoard: ElementRef;

  private cg: Api = null;

  private initChessground(): void {
    setTimeout(() => {
      this.cg = Chessground(this.chessBoard.nativeElement, {
        orientation: this.orientation,
        coordinates: false,
        movable: {
          color: null,
          dests: {}
        },
      });
      this.cg.set({ fen: this.fen });
    }, 50);
  }

  constructor() { }

  ngOnInit() {
    this.initChessground();
    setTimeout(() => this.setZoom(), 200);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.zoom) {
      this.setZoom();
    }
  }

  setZoom() {
    const el = this.chessBoard.nativeElement;
    if (el) {
      const px = `${this.zoom / 100 * 320}px`;
      el.style.width = px;
      el.style.height = px;
      document.body.dispatchEvent(new Event('chessground.resize'));
    }
  }
}
