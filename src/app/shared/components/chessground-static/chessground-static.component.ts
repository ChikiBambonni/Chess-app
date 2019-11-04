import {
  Component,
  OnInit,
  Input,
  Output,
  ElementRef,
  ViewChild,
  OnChanges,
  EventEmitter,
  SimpleChanges } from '@angular/core';
import { Chessground } from 'chessground';
import { Color } from 'chessground/types';
import { Api } from 'chessground/api';
import * as Chess from 'chess.js';

import { toDests, playOtherSide } from '@core/utils/chess.utils';
import { CgMove } from '@core/interfaces/chess.interfaces';
import { TrackChanges } from '@core/decorators/changes.decorator';
import { ChangesStrategy } from '@core/enums/changes-strategy.emuns';
import { toColor } from '@core/utils/chess.utils';

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
  coordinates = false;

  @Input()
  fen: string;

  @Output()
  cgMove = new EventEmitter<CgMove>();

  @ViewChild('chessBoard')
  chessBoard: ElementRef;

  private cg: Api = null;
  private chess: Chess = new Chess();

  private initChessground(): void {
    setTimeout(() => {
      this.cg = Chessground(this.chessBoard.nativeElement, {
        orientation: this.orientation,
        coordinates: this.coordinates,
        // movable: {
        //   color: null,
        //   dests: {}
        // },
        movable: {
          color: 'white',
          free: false,
          dests: toDests(this.chess),
          showDests: true,
        },
      });
      this.cg.set({
        fen: this.fen,
        movable: {
          events: {
            after: playOtherSide(this.cg, this.chess, this.cgMove)
          }
        }
      });
    }, 200);
  }

  constructor() { }

  ngOnInit() {
    this.initChessground();
    setTimeout(() => this.setZoom(), 200);
  }

  @TrackChanges('zoom', 'setZoom')
  @TrackChanges('fen', 'setFEN', ChangesStrategy.NonFirst)
  @TrackChanges('orientation', 'setOrientation')
  ngOnChanges(changes: SimpleChanges) {
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

  setFEN() {
    if (this.chess.validate_fen(this.fen).valid) {
      this.chess.load(this.fen);
      this.cg.set({
        fen: this.fen,
        turnColor: toColor(this.chess),
        movable: {
          color: toColor(this.chess),
          dests: toDests(this.chess)
        }
      });
    } else {
      console.error('Error setting fen');
    }
  }

  setOrientation(orientation: Color) {
    this.cg.set({ orientation });
  }
}
