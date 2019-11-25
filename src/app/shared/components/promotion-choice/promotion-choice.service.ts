import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Role } from 'chessground/types';

import { PromotionChoiceComponent } from './promotion-choice.component';

@Injectable()
export class PromotionChoiceService {

  private _promotinRef: ComponentRef<PromotionChoiceComponent>;
  private _promotion$: Subject<any> = new Subject();

  constructor(private _resolver: ComponentFactoryResolver) { }

  get promotion$(): Observable<any> {
    return this._promotion$.asObservable();
  }

  setPromotion(promotion) { // TODO: provide inteface here
    this._promotion$.next(promotion);
  }

  createComponent(entry: ViewContainerRef, top: number, column: number, color: string) {
    entry.clear();
    const factory = this._resolver.resolveComponentFactory(PromotionChoiceComponent);
    this._promotinRef = entry.createComponent(factory);
    this._promotinRef.instance.top = top + 'px';
    this._promotinRef.instance.color = color;
    this._promotinRef.instance.column = column;
    this._promotinRef.instance.promotion
      .pipe(take(1))
      .subscribe((role: Role) => {
        this._promotion$.next(role);
        this.destroyComponent();
      });
  }

  destroyComponent() {
    this._promotinRef.destroy();
  }
}
