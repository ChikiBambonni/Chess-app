import {
  Component,
  OnInit,
  Input,
  Output,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  OnChanges,
  EventEmitter,
  SimpleChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Chessground } from 'chessground';
import { Color, Role, FEN } from 'chessground/types';
import { Api } from 'chessground/api';
import * as Chess from 'chess.js';

import { toDests, playOtherSide, toVertical, toPromotion } from '@core/utils/chess.utils';
import { CgMove } from '@core/interfaces/chess.interfaces';
import { TrackChanges } from '@core/decorators/changes.decorator';
import { ChangesStrategy } from '@core/enums/changes-strategy.emuns';
import { toColor } from '@core/utils/chess.utils';
import { take } from 'rxjs/operators';
import { PromotionChoiceService } from '../promotion-choice/promotion-choice.service';

@Component({
  selector: 'app-chessground',
  templateUrl: './chessground.component.html',
  styleUrls: ['./chessground.component.scss']
})
export class ChessgroundComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

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

  @ViewChild('chessBoard', { static: false })
  chessBoard: ElementRef;

  @ViewChild('promotionContainer', { read: ViewContainerRef, static: false })
  entry: ViewContainerRef;

  private cg: Api = null;
  private chess: Chess = new Chess();

  private initChessground(): void {
    this.cg = Chessground(this.chessBoard.nativeElement, {
      orientation: this.orientation,
      coordinates: this.coordinates,
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
          after: playOtherSide(this.cg, this.chess, (move: CgMove) => {
            if (move.promotion) {
              this.promotionService.setPromotion({ column: toVertical(move.to), color: this.chess.turn() });// .next();
              this.promotionService.promotion$.pipe(take(1)).subscribe((role: Role) => {
                this.cg.setPieces({ [move.to]: { role , color: toColor(this.chess), promoted: true} });
                this.chess.move({ from: move.from, to: move.to, promotion: toPromotion(role) });
                this.cg.set({
                  turnColor: toColor(this.chess),
                  movable: {
                    color: toColor(this.chess),
                    dests: toDests(this.chess)
                  }
                });
              });
            } else {
              this.chess.move({ from: move.from, to: move.to });
            }
            this.cgMove.emit(move);
          })
        }
      }
    });
  }

  constructor(private promotionService: PromotionChoiceService) { }

  ngOnInit() {
    this.promotionService.promotion$.subscribe((col: any) => {
      this.promotionService.createComponent(this.entry, 17, col.column - 1, col.color); // TODO: calculate dynamically
    }); // TODO: unsibscribe with takeUntil
  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    this.initChessground();
  }

  @TrackChanges<number>('zoom', 'setZoom', ChangesStrategy.NonFirst)
  @TrackChanges<FEN>('fen', 'setFEN', ChangesStrategy.NonFirst)
  @TrackChanges<Color>('orientation', 'setOrientation', ChangesStrategy.NonFirst)
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
