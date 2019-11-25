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
  ComponentRef,
  OnDestroy,
  ComponentFactoryResolver} from '@angular/core';
import { Chessground } from 'chessground';
import { Color, Role } from 'chessground/types';
import { Api } from 'chessground/api';
import * as Chess from 'chess.js';

import { toDests, playOtherSide, toVertical, toPromotion } from '@core/utils/chess.utils';
import { CgMove } from '@core/interfaces/chess.interfaces';
import { TrackChanges } from '@core/decorators/changes.decorator';
import { ChangesStrategy } from '@core/enums/changes-strategy.emuns';
import { toColor } from '@core/utils/chess.utils';
import { PromotionChoiceComponent } from '../promotion-choice/promotion-choice.component';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-chessground-static',
  templateUrl: './chessground-static.component.html',
  styleUrls: ['./chessground-static.component.scss']
})
export class ChessgroundStaticComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

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
  private promotinRef: ComponentRef<PromotionChoiceComponent>;
  private promotionSubject: Subject<any> = new Subject();

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
            console.log(move);
            if (move.promotion) {
              this.promotionSubject.next({ column: toVertical(move.to), color: this.chess.turn() });
              this.promotionSubject.pipe(take(1)).subscribe((role: Role) => {
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

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.promotionSubject.subscribe((col: any) => {
      this.createComponent(17, col.column - 1, col.color); // TODO: calculate dynamically
    });
  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    this.initChessground();
  }

  @TrackChanges('zoom', 'setZoom', ChangesStrategy.NonFirst)
  @TrackChanges('fen', 'setFEN', ChangesStrategy.NonFirst)
  @TrackChanges('orientation', 'setOrientation', ChangesStrategy.NonFirst)
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

  createComponent(top: number, column: number, color: string) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(PromotionChoiceComponent);
    this.promotinRef = this.entry.createComponent(factory);
    this.promotinRef.instance.top = top + 'px';
    this.promotinRef.instance.color = color;
    this.promotinRef.instance.column = column;
    this.promotinRef.instance.promotion
      .pipe(take(1))
      .subscribe((role: Role) => {
        this.promotionSubject.next(role);
        this.destroyComponent();
      });
  }

  destroyComponent() {
    this.promotinRef.destroy();
  }
}
