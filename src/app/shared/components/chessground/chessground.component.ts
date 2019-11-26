import { PromotionChoiceService } from './../promotion-choice/promotion-choice.service';
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
  Inject,
} from '@angular/core';
import { Chessground } from 'chessground';
import { Color, Role, FEN } from 'chessground/types';
import { Api } from 'chessground/api';
import * as Chess from 'chess.js';

import { toDests, playOtherSide, toVertical, toPromotion } from '@core/utils/chess.utils';
import { ChessgroundService } from './chessground.service';
import { CgMove } from '@core/interfaces/chess.interfaces';
import { TrackChanges } from '@core/decorators/changes.decorator';
import { ChangesStrategy } from '@core/enums/changes-strategy.emuns';
import { toColor } from '@core/utils/chess.utils';
import { take, takeUntil } from 'rxjs/operators';
import { TakeUntilDestroy } from '@core/decorators/take-util-destroy.decorator';
import { ChessgroundBase } from './chessground.constants';

@Component({
  selector: 'app-chessground',
  templateUrl: './chessground.component.html',
  styleUrls: ['./chessground.component.scss']
})
@TakeUntilDestroy
export class ChessgroundComponent extends ChessgroundBase implements OnInit, OnDestroy, OnChanges, AfterViewInit {

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

  @ViewChild('chessBoard', { static: false })
  chessBoard: ElementRef;

  @ViewChild('promotionContainer', { read: ViewContainerRef, static: false })
  entry: ViewContainerRef;

  private componentDestroy: Function;

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
          after: playOtherSide(this.cg, this.chess, this.playOtherSide)
        }
      }
    });
  }

  constructor(
    @Inject(PromotionChoiceService) promotionService: PromotionChoiceService,
    private cgService: ChessgroundService) {
      super(promotionService);
    }

  ngOnInit() {
    this.promotionService.promotion$.pipe(
      takeUntil(this.componentDestroy())
    )
    .subscribe((col: any) => {
      this.promotionService.createComponent(this.entry, 17, col.column - 1, col.color); // TODO: calculate dynamically
    });
  }

  ngOnDestroy() {}

  ngAfterViewInit() {
    this.initChessground();
  }

  @TrackChanges<number>('zoom', 'setZoom', ChangesStrategy.NonFirst)
  @TrackChanges<FEN>('fen', 'setFEN', ChangesStrategy.NonFirst)
  @TrackChanges<Color>('orientation', 'setOrientation', ChangesStrategy.NonFirst)
  ngOnChanges(changes: SimpleChanges) {
  }

  setZoom() {
    this.cgService.setZoom(this.chessBoard.nativeElement, this.zoom);
  }

  setFEN() {
    this.cgService.setFEN(this.chess, this.cg, this.fen);
  }

  setOrientation() {
    this.cgService.setOrientation(this.cg, this.orientation);
  }
}
